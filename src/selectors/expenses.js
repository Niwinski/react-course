export default (expenses, { text, sortBy, startDate: start, endDate: end }) => {
    return expenses
        .filter((i) => {
            const startDate = start == undefined || i.createdAt >= start;
            const endDate = end == undefined || i.createdAt <= end;
            // const startDate = true;
            // const endDate = true;
            const textMatch =
                text == "" ||
                i.description.toLowerCase().indexOf(text.toLowerCase()) >= 0;
            return startDate && endDate && textMatch;
        })
        .sort((a, b) => {
            if (sortBy == "date") {
                return a.createdAt < b.createdAt ? 1 : -1;
            } else {
                return a.amount < b.amount ? 1 : -1;
            }
        });
};
