const add = (a, b) => {
    return a + b;
};

test("adds two numbers", () => {
    const result = add(3, 4);

    expect(result).toBe(7);
});
