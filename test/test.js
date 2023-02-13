const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");
const expect = chai.expect;

chai.use(chaiHttp);

describe("POST /items", () => {
  it("should add a new medical bill", (done) => {
    const bill = {
      "patientName": "Anand Kulkarni",
      "address": "2147 Newhall St, Santa Clara 95050",
      "hospitalName": "Truffle Health",
      "dateOfService": "02-12-2023",
      "billAmount": 1000.0
    };
    chai
      .request(server)
      .post("/items")
      .send(bill)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(bill);
        done();
      });
  });
});

describe("GET /items", () => {
  it("should return all medical bills", (done) => {
    chai
      .request(server)
      .get("/items")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });
});