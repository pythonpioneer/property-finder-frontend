import React, { useState } from 'react';

const FilterModal = ({ handleCloseModal }) => {
    // State management for form inputs
    const [checkedItems, setCheckedItems] = useState({
        item1: false,
        item2: false,
        item3: false,
        item4: false,
    });

    const [checkedTenantItems, setTenantCheckedItems] = useState({
        item1: false,
        item2: false,
        item3: false,
    });

    const [selectedValue, setSelectedValue] = useState("option1");

    // Event handlers for form inputs
    const handleCheckboxChange = (event) => {
        setCheckedItems({
            ...checkedItems,
            [event.target.name]: event.target.checked,
        });
    };

    const handleTenantCheckboxChange = (event) => {
        setTenantCheckedItems({
            ...checkedTenantItems,
            [event.target.name]: event.target.checked,
        });
    };

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className="modal" style={{ display: 'block' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Filter Modal</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
                    </div>
                    <div className="modal-body">
                        <div className="card" style={{ backgroundColor: 'transparent', borderRadius: '10px' }}>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Location" />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Property Type</label>
                                        <div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    checked={checkedItems.item1}
                                                    onChange={handleCheckboxChange}
                                                    name="item1"
                                                />
                                                <label className="form-check-label">1 RK</label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    checked={checkedItems.item2}
                                                    onChange={handleCheckboxChange}
                                                    name="item2"
                                                />
                                                <label className="form-check-label">1 BHK</label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    checked={checkedItems.item3}
                                                    onChange={handleCheckboxChange}
                                                    name="item3"
                                                />
                                                <label className="form-check-label">2 BHK</label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    checked={checkedItems.item4}
                                                    onChange={handleCheckboxChange}
                                                    name="item4"
                                                />
                                                <label className="form-check-label">3 BHK</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Allowed Tenant</label>
                                        <div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    checked={checkedTenantItems.item1}
                                                    onChange={handleTenantCheckboxChange}
                                                    name="item1"
                                                />
                                                <label className="form-check-label">Girls</label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    checked={checkedTenantItems.item2}
                                                    onChange={handleTenantCheckboxChange}
                                                    name="item2"
                                                />
                                                <label className="form-check-label">Family</label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    checked={checkedTenantItems.item3}
                                                    onChange={handleTenantCheckboxChange}
                                                    name="item3"
                                                />
                                                <label className="form-check-label">Couple</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Budget</label>
                                        <input type="text" className="form-control mb-2" placeholder="min" />
                                        <span> to </span>
                                        <input type="text" className="form-control mb-2" placeholder="max" />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Brokerage</label>
                                        <div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    value="option1"
                                                    checked={selectedValue === "option1"}
                                                    onChange={handleRadioChange}
                                                />
                                                <label className="form-check-label">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    value="option2"
                                                    checked={selectedValue === "option2"}
                                                    onChange={handleRadioChange}
                                                />
                                                <label className="form-check-label">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                        <button type="button" className="btn btn-primary">Apply Filters</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterModal;