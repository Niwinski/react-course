import { setStartDate, setEndDate, setTextFilter } from "../../actions/filters";
import moment from "moment";

test("start date", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        date: moment(0),
    });
});

test("end date", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        date: moment(0),
    });
});

test("text filter", () => {
    const action = setTextFilter("foobar");
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        val: "foobar",
    });
});
