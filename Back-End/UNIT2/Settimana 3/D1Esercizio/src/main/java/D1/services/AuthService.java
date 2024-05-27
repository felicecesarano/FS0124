package D1.services;

import D1.entities.Employee;
import D1.exceptions.UnauthorizedException;
import D1.payloads.UserLoginDTO;
import D1.security.JWTTools;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    EmployeeService employeeService;

    @Autowired
    JWTTools jwtTools;

    @Autowired
    PasswordEncoder encoder;

    public String authUserAndCreateToken(UserLoginDTO payload) {
        Employee user = employeeService.findByEmail(payload.email());
        if (encoder.matches(payload.password(), user.getPassword()))
            return jwtTools.createToken(user);
        else
            throw new UnauthorizedException("Password is wrong");
    }

}
