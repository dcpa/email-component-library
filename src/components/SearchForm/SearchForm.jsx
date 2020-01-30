import React from "react";
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const SearchForm = (props) => { 
    return (
        <Form> 
            <FormGroup>
                <Input type="search" name="search" id="searchDocs" placeholder="Search the library" />
            </FormGroup>
        </Form>
    )
}

export default SearchForm;