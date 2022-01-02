type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}

let props: ManType;
beforeEach(() => {
    props = {
        name: "Dimitri",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Lunnaya street"
            }
        }
    }
})

test("", () => {

    const {age, lessons} = props;
    const {title} = props.address.street;

    expect(age).toBe(32)
    expect(lessons.length).toBe(2)
    expect(title).toBe("Lunnaya street")


})