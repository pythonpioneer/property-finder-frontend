import React, { useState, useRef } from "react";


const PropertyForm = () => {
    const [propertyType, setPropertyType] = useState("");
    const [furnishingType, setFurnishingType] = useState("");
    const [area, setArea] = useState("");
    const [preferredTenant, setPreferredTenant] = useState([]);

    const handlePropertyTypeChange = (event) => {
        setPropertyType(event.target.value);
        // Clear furnishing type when property type changes
        setFurnishingType("");
    };
    const handlePreferredTenantChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setPreferredTenant([...preferredTenant, value]);
        } else {
            setPreferredTenant(preferredTenant.filter(tenant => tenant !== value));
        }
    };

    const handleFurnishingTypeChange = (event) => {
        setFurnishingType(event.target.value);
    };

    const handleAreaChange = (event) => {
        setArea(event.target.value);
    };

    // to store all the values
    const stateRef = useRef(null);
    const cityRef = useRef(null);
    const districtRef = useRef(null);
    const sectorRef = useRef(null);
    const blockRef = useRef(null);
    const zipRef = useRef(null);
    const buildingRef = useRef(null);

    const rentRef = useRef(null);
    const maintainanceRef = useRef(null);
    const securityRef = useRef(null);
    const brokerageRef = useRef(null);

    const imageRef = useRef(null);
    const descRef = useRef(null);
    const propertyTypeRef = useRef(null);
    const tenantRef = useRef(null);
    const furnishingRef = useRef(null);
    const areaRef = useRef(null);
    const flooringRef = useRef(null);
    const ageRef = useRef(null);


    // to handle the form submission
    const handleSubmit = () => {
        console.log(furnishingType)
    }



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
                                    <input ref={buildingRef} type="text" className="form-control" placeholder="Building Name" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input ref={blockRef} type="text" className="form-control" placeholder="Block" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <input ref={sectorRef} type="text" className="form-control" placeholder="Sector" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input ref={zipRef} type="text" className="form-control" placeholder="Zip" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <input ref={cityRef} type="text" className="form-control" placeholder="City" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input ref={districtRef} type="text" className="form-control" placeholder="District" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <input ref={stateRef} type="text" className="form-control mb-3" placeholder="State" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <h4>Price</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <input ref={rentRef} type="text" className="form-control" placeholder="Monthly Rent"/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input ref={maintainanceRef} type="text" className="form-control" placeholder="maintainance" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <input ref={securityRef}type="text" className="form-control" placeholder="Security Charge" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input ref={brokerageRef} type="text" className="form-control" placeholder="Brokerage" />
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col">
                                    <h4>Property Details</h4>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <textarea ref={descRef} className="form-control mb-3" placeholder="Description"></textarea>
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
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="propertyType" id="3bhk" value="3bhk" checked={propertyType === "3bhk"} onChange={handlePropertyTypeChange} />
                                        <label className="form-check-label" htmlFor="3bhk">
                                            3 BHK
                                        </label>
                                    </div>
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
                            <div className="row mt-3">
                                <div className="col">
                                    <h6>Preferred Tenant</h6>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="family"
                                            value="family"
                                            onChange={handlePreferredTenantChange}
                                        />
                                        <label className="form-check-label" htmlFor="family">
                                            Family
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="bachelor"
                                            value="bachelors"
                                            onChange={handlePreferredTenantChange}
                                        />
                                        <label className="form-check-label" htmlFor="bachelor">
                                            Bachelor
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="girls"
                                            value="girls"
                                            onChange={handlePreferredTenantChange}
                                        />
                                        <label className="form-check-label" htmlFor="girls">
                                            Girls
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="boys"
                                            value="boys"
                                            onChange={handlePreferredTenantChange}
                                        />
                                        <label className="form-check-label" htmlFor="boys">
                                            Boys
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="studio"
                                            value="studio"
                                            onChange={handlePreferredTenantChange}
                                        />
                                        <label className="form-check-label" htmlFor="studio">
                                            Studio
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="couples"
                                            value="couples"
                                            onChange={handlePreferredTenantChange}
                                        />
                                        <label className="form-check-label" htmlFor="couples">
                                            Couples
                                        </label>
                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-group mb-3">
                                        <input ref={areaRef} type="text" className="form-control" placeholder="Area" aria-label="Area" aria-describedby="area-addon" value={area} onChange={handleAreaChange} ref={areaRef} />
                                        <span className="input-group-text" id="area-addon">sqft.</span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <input ref={imageRef} type="file" className="mt-1" style={{ border: 'none' }} />
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
