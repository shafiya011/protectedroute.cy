describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("welcome to the landing page", () => {
    cy.get(".entryLAndingPage").click();
  });
  it("the protected review page-redirected to login", () => {
    cy.get(".entryLogin").click();
  });
  it("should successfully log in with valid credentials", () => {
    cy.get(".entryLogin").click();
  });
  it("Login with the credentials, to see the protected page", () => {
    cy.get(".userInput").type("shafiya");
    cy.get(".emailInput").type("shafiya@gmail.com");
    cy.get(".loginSubmitBtn").click();
    cy.url().should("include", "/reviews");
    cy.get(".entryReviews").click();
    cy.contains("Welcome, shafiya!").should("be.visible");
    cy.get(".replyBtn").click();
    cy.get(".saveBtn").click();
    cy.get(".replyError").should("be.visible");
    cy.get(".replyContainer").type("Greatwork!!");
    cy.get(".saveBtn").click();
    cy.get(".hideReply").click();
    cy.get(".replyviewBtn").click();
    cy.get(".deleteBtn").click();
    cy.get(".logOutBtn").click();
  });
  it("login out of the protected page", () => {
    cy.visit("http://localhost:3000/landingpage");
  });
});
