import React, {useContext} from 'react';
import toast from "react-hot-toast";
import {AuthContext} from "../../contexts/AuthProvider";

const BookingModal = ({modalData, setModalData, user}) => {
    console.log(user);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const productid = modalData._id;
        const buyername = form.displayName.value;
        const buyeremail = form.email.value;
        const productname = form.productname.value;
        const price = form.price.value;
        const phn = form.phn.value;
        const location = form.location.value;

        const bookedData = {
            productid, buyername, buyeremail, productname, price, phn, location
        };

        toast.success("Item is Booked");

        setModalData(null);
    };

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="text-lg font-bold">{modalData?.productname}</h3>
                    <p className="py-4">{modalData?.desc}</p>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="displayName" placeholder="Type here" defaultValue={user?.displayName} readOnly className="mt-2 input input-bordered w-full" />
                        <input type="text" name="email" placeholder="Type here" defaultValue={user?.email} disabled className="mt-2 input input-bordered w-full" />
                        <input type="text" name="productname" placeholder="Type here" defaultValue={modalData?.productname} disabled className="mt-2 input input-bordered w-full" />
                        <input type="text" name="price" placeholder="Type here" defaultValue={'Price : ' + modalData?.price} disabled className="mt-2 input input-bordered w-full" />
                        <input type="text" name="phn" placeholder="Your Phone Number" className="mt-2 input input-bordered w-full" />
                        <input type="text" name="location" placeholder="Meeting Location" className="mt-2 input input-bordered w-full" />
                        <button type="submit" className="btn btn-success mt-2 w-full">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;