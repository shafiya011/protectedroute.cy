describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("welcome to the landing page", () => {
    cy.get(".entryLAndingPage").click();
    cy.wait(2000);
  });
  it("the protected review page-redirected to login", () => {
    cy.get(".entryReviews").click();
    cy.get(".entryLogin").click();
    cy.get(".reviewPage").should("not.exist");
    cy.wait(2000);
  });

  it("should successfully log in with valid credentials", () => {
    cy.get(".entryLogin").click();
    cy.get(".userInput").type("shafiya");
    cy.get(".emailInput").type("shafiya@gmail.com");
    cy.get(".loginSubmitBtn").click();
    cy.get(".entryLogin").should("not.exist");
    cy.get(".entryReviews").click();
    cy.get(".reviewPage").click();
    cy.get("#replyBtn").click();
    cy.get("#replyContainer").should("be.visible");
    cy.get(".saveBtn").click();
    cy.get(".replyError").should("be.visible");
    cy.get("#replyContainer").type("Greatwork!!");
    cy.get(".saveBtn").click();
    cy.get(".hideReply").click();
    cy.get(".replyviewBtn").click();
    cy.get(".deleteBtn").click();
    cy.get("#logOutBtn").click();
    cy.wait(2000);
  });

  it("checking the protected route", () => {
    cy.get(".entryReviews").click();
  });
});
