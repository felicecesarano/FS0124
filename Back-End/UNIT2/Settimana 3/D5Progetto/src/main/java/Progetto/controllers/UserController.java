package Progetto.controllers;

import Progetto.entities.User;
import Progetto.exceptions.BadRequestException;
import Progetto.payloads.NewUserDTO;
import Progetto.services.AuthService;
import Progetto.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private AuthService authService;


    @GetMapping("/me")
    public User findMe(@AuthenticationPrincipal User currentUser) {
        return currentUser;
    }

    @DeleteMapping("/me")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteMe(@AuthenticationPrincipal User currentUser) {
        this.userService.findByIdAndDelete(currentUser.getId());
    }

    @PutMapping("/me")
    public User modifyMe(@AuthenticationPrincipal User currentUser,
                         @RequestBody @Validated NewUserDTO payload,
                         BindingResult validation) {
        if (validation.hasErrors()) throw new BadRequestException(validation.getAllErrors());
        return this.userService.findByIdAndUpdate(currentUser.getId(), payload);
    }
}
