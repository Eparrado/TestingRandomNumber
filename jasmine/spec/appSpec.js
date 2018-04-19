describe("App", function() {
    var randomNumber;
    var userNumber;

    beforeEach(function() {
        randomNumber = getRandomIntInclusive(1,100);  
        userNumber = saveInputNumber(event);  
    });

    it("checks random number is actually a number between 1 and 100", function(){
        expect(randomNumber).toBeGreaterThanOrEqual(1);
    });
    it("saves number introduce by the user", function(){
        var inputNumber = document.querySelector(".input-number");
        var submitButton = document.querySelector(".submit-button");
        submitButton.click();
        expect(userNumber).not.toBe("");
    });
});