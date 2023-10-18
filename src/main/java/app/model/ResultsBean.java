package app.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class ResultsBean implements Serializable {

    private final List<OneRes> results;

    public ResultsBean() {
        results = new ArrayList<>();
    }

    public void add(OneRes oneRes) {
        results.add(oneRes);
    }

    public List<OneRes> getResults() {
        return results;
    }
}