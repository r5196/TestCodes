import { useState } from "react"
import ParcelInput from "./ParcelInput"

const ShippingForm = () => {
  const [parcels, setParcels] = useState([
    { length: '', width: '', height: '', weight: '', temperatureCondition: '' },
  ]);

  const addParcel = () => {
    setParcels([
      ...parcels,
      { length: '', width: '', height: '', weight: '', temperatureCondition: '' },
    ]);
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(parcels)
  }

  const handleParcelChange = (index, parcelData) => {
    const newParcels = [...parcels]
    newParcels[index] = parcelData
    setParcels(newParcels)
  }

  const removeParcel = (index) => {
    setParcels(parcels.filter((_, idx) => idx !== index));
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        {parcels.map((parcel, index) => (
          <ParcelInput
            key={index}
            parcelData={parcel}
            onParcelChange={(data) => handleParcelChange(index, data)}
            removeParcel={() => removeParcel(index)}
          />
        ))}
        <button type="button" onClick={addParcel}>
          Add Another Parcel
        </button>
        <button type="submit">
          Calculate Shipping Fee 
        </button>
      </form>
    </div>
  )
}

export default ShippingForm