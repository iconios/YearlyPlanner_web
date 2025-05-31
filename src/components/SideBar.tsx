import { Button, Offcanvas, OffcanvasBody, OffcanvasTitle, OffcanvasHeader } from "react-bootstrap";
import { useState } from "react";
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';

const SideBar = () => {
    const [ show, setShow ] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }
    const handleClose = () => {
        setShow(false);
    }


    const buttons = [
        'Yearly',
        'Monthly',
        'Weekly',
        'Daily'
    ]


    return (
        <div className="d-sm-none w-75 ms-2">
            <Button onClick={handleShow} className="mt-3" style={{}}>MENU</Button>
            <Offcanvas show={show} onHide={handleClose} placement="start" scroll={false} backdrop={true}  style={{ zIndex: 1999, top: 64, width: '75%' }} >
                <OffcanvasHeader closeButton closeVariant="white" className="bg-primary">
                    <OffcanvasTitle className="text-white mx-auto">Planner</OffcanvasTitle>
                </OffcanvasHeader>
                <OffcanvasBody className="d-flex flex-column" style={{ height: 'calc(100vh - 64px - 56px)' }} >
                    <div className="flex-grow-1">
                        { buttons.map(button => (
                        <Button key={button} className="mt-3 bg-light text-primary border border-0 w-100">{button} View</Button>
                        ))}
                    </div>
                    <Button className="bg-light text-primary border border-0 w-100 mb-4">Log Out<ArrowRightStartOnRectangleIcon className="ms-2" style={{ height: '18px' }}/> </Button>
                </OffcanvasBody>
            </Offcanvas>
        </div>
    )
}

export default SideBar;