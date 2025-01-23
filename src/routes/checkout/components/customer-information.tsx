import { FC } from "react";

import FormInput from "./form-input";

const CustomerInformation: FC<{ formMethods: any }> = ({ formMethods }) => (
  <section className="w-full lg:w-8/12 bg-white shadow-md rounded-lg p-8">
    <h2 className="text-2xl font-semibold mb-6">Customer Information</h2>
    <div className="grid grid-cols-1 gap-6">
      <FormInput
        label="Full Name"
        name="name"
        formMethods={formMethods}
        required
      />
      <FormInput
        label="Email Address"
        name="email"
        type="email"
        formMethods={formMethods}
        required
      />
      <FormInput
        label="Street Address"
        name="address"
        formMethods={formMethods}
        required
      />
      <div className="grid grid-cols-2 gap-6">
        <FormInput
          label="City"
          name="city"
          formMethods={formMethods}
          required
        />
        <FormInput
          label="State / Province"
          name="state"
          formMethods={formMethods}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <FormInput
          label="ZIP / Postal Code"
          name="zipCode"
          formMethods={formMethods}
          required
        />
        <FormInput
          label="Country"
          name="country"
          formMethods={formMethods}
          required
        />
      </div>
    </div>
  </section>
);

export default CustomerInformation;
