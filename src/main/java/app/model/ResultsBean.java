package app.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class ResultsBean implements Serializable {
    private static final ResultsBean instance = new ResultsBean();

    private final List<OneRes> results;

    private boolean lastHitResValue;

    public static ResultsBean getInstance() {
        return instance;
    }

    private ResultsBean() {
        results = new ArrayList<>();
    }

    public void add(OneRes oneRes) {
        results.add(oneRes);
    }

    public List<OneRes> getResults() {
        return instance.results;
    }

    public void setLastHitResValue(boolean lastHitResValue) {
        this.lastHitResValue = lastHitResValue;
    }

    public boolean getLastHitResValue() {
        return lastHitResValue;
    }
}