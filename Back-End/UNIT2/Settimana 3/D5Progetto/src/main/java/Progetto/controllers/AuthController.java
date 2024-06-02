package Progetto.controllers;

import Progetto.entities.User;
import Progetto.exceptions.BadRequestException;
import Progetto.payloads.NewUserDTO;
import Progetto.payloads.UserLoginDTO;
import Progetto.payloads.UserLoginResponseDTO;
import Progetto.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public UserLoginResponseDTO login(@RequestBody @Validated UserLoginDTO payload, BindingResult validation) {
        if (validation.hasErrors()) throw new BadRequestException(validation.getAllErrors());
        return new UserLoginResponseDTO(authService.authUserAndCreateToken(payload));
    }

    @PostMapping("/register")
    public User register(@RequestBody @Validated NewUserDTO payload, BindingResult validation) {
        if (validation.hasErrors()) throw new BadRequestException(validation.getAllErrors());
        return this.authService.save(payload);
    }

}
