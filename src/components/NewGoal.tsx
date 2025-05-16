import { Form, FormControl, FormLabel, FormGroup, Button } from "react-bootstrap";

const NewGoal = () => {
    return (
        <>
            <h1>New Goal</h1>
            <hr />
            <Form>
                <FormGroup>
                    <FormLabel>
                        Goal title
                    </FormLabel>
                    <FormControl type="text" />
                </FormGroup>
                <Button>Cancel</Button>
                <Button>Save</Button>
            </Form>            
        </>
    )
}

export default NewGoal;