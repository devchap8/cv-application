export default function EnterInfo() {
    return (
        <section className="enterInfoSection formSection">
            <h2 className="sectionHeader">Personal Information:</h2>
            <label htmlFor="name">Name:</label><br/>
            <input type="text" id="name" name="name"></input><br/>
            <label htmlFor="email">Email:</label><br/>
            <input type="email" id="email" name="email"></input><br/>
            <label htmlFor="phone">Phone Number:</label><br/>
            <input type="tel" id="phone" name="phone"></input><br/>
        </section>
    );
}