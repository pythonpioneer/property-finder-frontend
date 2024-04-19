import React, { useState, useRef } from "react";

const PropertyForm = () => {
    const [propertyType, setPropertyType] = useState("");
    const [furnishingType, setFurnishingType] = useState("");
    const [area, setArea] = useState("");

    // Create refs
    const propertyTypeRef = useRef(null);
    const furnishingTypeRef = useRef(null);
    const areaRef = useRef(null);

    const handlePropertyTypeChange = (event) => {
        setPropertyType(event.target.value);
        // Clear furnishing type when property type changes
        setFurnishingType("");
    };

    const handleFurnishingTypeChange = (event) => {
        setFurnishingType(event.target.value);
    };

    const handleAreaChange = (event) => {
        setArea(event.target.value);
    };

    const handleSubmit = () => {
        // Access current value of each ref to get input values
        const propertyTypeValue = propertyTypeRef.current.value;
        const furnishingTypeValue = furnishingTypeRef.current.value;
        const areaValue = areaRef.current.value;

        // Handle form submission here
        console.log("Property Type:", propertyTypeValue);
        console.log("Furnishing Type:", furnishingTypeValue);
        console.log("Area:", areaValue);
    };

    return (
        <div className="container pt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card" style={{ backgroundColor: 'transparent', boxShadow: '8px 8px 0px -4px #b2b808' }}>
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h4>Address</h4>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <input type="text" className="form-control" placeholder="Building Name" value={propertyType} onChange={handlePropertyTypeChange} ref={propertyTypeRef} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input type="text" className="form-control" placeholder="Block" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <input type="text" className="form-control" placeholder="Sector" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input type="text" className="form-control" placeholder="Zip" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <input type="text" className="form-control" placeholder="City" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input type="text" className="form-control" placeholder="District" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control mb-3" placeholder="State" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <h4>Price</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <input type="text" className="form-control" placeholder="Building Name" value={propertyType} onChange={handlePropertyTypeChange} ref={propertyTypeRef} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input type="text" className="form-control" placeholder="Block" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <input type="text" className="form-control" placeholder="Building Name" value={propertyType} onChange={handlePropertyTypeChange} ref={propertyTypeRef} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input type="text" className="form-control" placeholder="Block" />
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col">
                                    <h4>Property Details</h4>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <textarea className="form-control mb-3" placeholder="Description"></textarea>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <h6>Property Type</h6>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="propertyType" id="1bhk" value="1bhk" checked={propertyType === "1bhk"} onChange={handlePropertyTypeChange} />
                                        <label className="form-check-label" htmlFor="1bhk">
                                            1 BHK
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="propertyType" id="2bhk" value="2bhk" checked={propertyType === "2bhk"} onChange={handlePropertyTypeChange} />
                                        <label className="form-check-label" htmlFor="2bhk">
                                            2 BHK
                                        </label>
                                    </div>
                                    {/* Add other property types similarly */}
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col">
                                    <h6>Furnishing Type</h6>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="furnishingType" id="semi" value="semi" checked={furnishingType === "semi"} onChange={handleFurnishingTypeChange} />
                                        <label className="form-check-label" htmlFor="semi">
                                            Semi-furnished
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="furnishingType" id="un" value="un" checked={furnishingType === "un"} onChange={handleFurnishingTypeChange} />
                                        <label className="form-check-label" htmlFor="un">
                                            Unfurnished
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="furnishingType" id="full" value="full" checked={furnishingType === "full"} onChange={handleFurnishingTypeChange} />
                                        <label className="form-check-label" htmlFor="full">
                                            Full-furnished
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <h6>Area</h6>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Area" aria-label="Area" aria-describedby="area-addon" value={area} onChange={handleAreaChange} ref={areaRef} />
                                        <span className="input-group-text" id="area-addon">sqft.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyForm;
