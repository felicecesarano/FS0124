package D3.adapter;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class AdapterRunner implements CommandLineRunner {
    @Override
    public void run(String... args) throws Exception {
        Info newInfo = new Info("Felice", "Cesarano", LocalDate.of(2000, 12, 21));
        UserData newUserData = new UserData();
        newUserData.getData(newInfo);
        System.out.println("###  ADAPTER  ###");
        System.out.println(newUserData);
        System.out.println("###  END ADAPTER  ###");
    }
}
