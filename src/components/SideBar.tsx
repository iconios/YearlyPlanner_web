import { Button, Offcanvas, OffcanvasBody, OffcanvasTitle, OffcanvasHeader } from "react-bootstrap";
import { useState } from "react";

const SideBar = () => {
    const [ show, setShow ] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }
    const handleClose = () => {
        setShow(false);
    }


    return (
        <div className="d-sm-none w-75">
            <Button onClick={handleShow} className="mt-3" style={{}}>MENU</Button>
            <Offcanvas show={show} onHide={handleClose} placement="start" scroll={false} backdrop={true}  style={{ zIndex: 1999, top: 64, width: '75%' }} >
                <OffcanvasHeader closeButton closeVariant="white" className="bg-primary">
                    <OffcanvasTitle className="text-white mx-auto">Planner</OffcanvasTitle>
                </OffcanvasHeader>
                <OffcanvasBody className="d-flex flex-column" >
                    <Button className="mt-3 bg-light text-primary border border-0">Yearly View</Button>
                    <Button className="my-3 bg-light text-primary border border-0">Monthy View</Button>
                    <Button className="mb-3 bg-light text-primary border border-0">Daily View</Button>
                </OffcanvasBody>
            </Offcanvas>
        </div>
    )
}

export default SideBar;