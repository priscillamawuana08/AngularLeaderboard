package Model;

import java.util.List;

//@Entity
//@Table(name = "PROFILES")
//   @Data
public class Profile {
    //    @Id
    private String username;
    private String name;
    private String clan;
    private Integer honor;
    private Integer overallRank;

//    @OneToMany(mappesBy = "profile",cascadeType ALL,)
    private List<LanguageLevel> languageLevels;
}
