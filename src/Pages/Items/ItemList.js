import React, { Component } from "react";
import * as customer from "../CutomerList/CustomerList.style";
import ButtonText from "../../../components/ButtonText/ButtonText";
import { getCustomer } from "../../../action/customer";
import { connect } from "react-redux";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
class CustomerList extends Component {
  state = {
    input: "",
  };
  componentDidMount() {
    this.props.getCustomer();
  }

  handleInput = (e) => {
    this.setState({
      input: e.target.value,
    });
  };


  render() {
    const { employees, filterIt } = this.props;
    const showingContacts =
    this.state.input === ""  
      ? employees
      : employees.filter((c) =>{
        return  c.fname.toLowerCase().includes(this.state.input.toLowerCase())||c.lname.toLowerCase().includes(this.state.input.toLowerCase())
      }
         
        );
    return (
      <div>
        <div>
          <customer.topBar>
            <div>
              <form>
                <customer.Input
                  value={this.state.input}
                  onChange={this.handleInput}
                />
              </form>
            </div>
            <customer.Searchbar>
              <Link to="/create">
                <ButtonText style={{ height: 30 }}>Add Customer</ButtonText>
              </Link>
            </customer.Searchbar>
          </customer.topBar>
        </div>
        <customer.wrapper>
          <div>
            <customer.Heading>
              Customers <customer.Span>{showingContacts.length}</customer.Span>
            </customer.Heading>
          </div>
          <customer.Container>
           
            <customer.Grid_item_heading>First Name</customer.Grid_item_heading>
            <customer.Grid_item_heading>Last Name</customer.Grid_item_heading>
            <customer.Grid_item_heading>Email</customer.Grid_item_heading>
            <customer.Grid_item_heading>Phone</customer.Grid_item_heading>
            <customer.Grid_item_heading>Address</customer.Grid_item_heading>
            <customer.Grid_item_heading>Company</customer.Grid_item_heading>
            <customer.Grid_item_heading>Action</customer.Grid_item_heading>
            {showingContacts &&
              showingContacts.map((item, index) => (
                <>
                  <customer.Grid_item key={item.id}>
                    {item.fname}
                  </customer.Grid_item>
                  <customer.Grid_item>{item.lname}</customer.Grid_item>
                  <customer.Grid_item>{item.email}</customer.Grid_item>
                  <customer.Grid_item>{item.phone}</customer.Grid_item>
                  <customer.Grid_item>{item.address}</customer.Grid_item>

                  <customer.Grid_item>{item.company}</customer.Grid_item>
                  <customer.Grid_item>
                    <Link to="/customer">
                      <FaPen color="green" />
                    </Link>
                    &nbsp;&nbsp;&nbsp;{" "}
                    <Link to="/customer">
                      <FaTrashAlt color="red" />
                    </Link>
                  </customer.Grid_item>
                </>
              ))}
          </customer.Container>
        </customer.wrapper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employees: state.employees,
  };
};
export default connect(mapStateToProps, { getCustomer })(CustomerList);
