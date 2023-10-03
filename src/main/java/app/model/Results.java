package app.model;

import java.util.ArrayList;
import java.util.List;

public class Results {
    private static Results instance = new Results();

    private List<OneRes> results;

    public static Results getInstance() {
        return instance;
    }

    private Results() {
        results = new ArrayList<>();
    }

    public void add(OneRes oneRes) {
        results.add(oneRes);
    }

    public List<OneRes> getResults() {
        return results;
    }

    //    public List<String> list() {
//        return model.stream()
//                .map(OneRes::getX)
//                .collect(Collectors.toList());
//    }
}