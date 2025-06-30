import React, { useState } from "react";

const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT"];
const meals = ["Lunch", "Evening Snack", "Dinner"];
const mealTypes = ["Balanced Meal", "High Protein"];
const foodPreferences = ["Vegetarian", "Non-Vegetarian", "Eggetarian"];

const initialFormData = {
  name: "",
  phone: "",
  selectedMeals: [],
  mealDays: {},
  mealType: "",
  foodPreference: "",
  allergies: "",
  address: "",
};

const MultiStepForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [formKey, setFormKey] = useState(0); // to force reset

  const toggleMeal = (meal) => {
    setFormData((prev) => {
      const updatedMeals = prev.selectedMeals.includes(meal)
        ? prev.selectedMeals.filter((m) => m !== meal)
        : [...prev.selectedMeals, meal];

      const updatedMealDays = { ...prev.mealDays };
      if (!updatedMeals.includes(meal)) {
        delete updatedMealDays[meal]; // clear days if meal removed
      }

      return {
        ...prev,
        selectedMeals: updatedMeals,
        mealDays: updatedMealDays,
      };
    });
  };

  const toggleDay = (meal, day) => {
    setFormData((prev) => {
      const currentDays = prev.mealDays[meal] || [];
      const updatedDays = currentDays.includes(day)
        ? currentDays.filter((d) => d !== day)
        : [...currentDays, day];
      return {
        ...prev,
        mealDays: { ...prev.mealDays, [meal]: updatedDays },
      };
    });
  };

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (formData.name.trim().length < 2)
      newErrors.name = "Must be at least 2 characters.";
    if (formData.phone.trim().length !== 10)
      newErrors.phone = "Must be exactly 10 digits.";
    if (formData.selectedMeals.length === 0)
      newErrors.selectedMeals = "Select at least one meal.";
    if (!formData.foodPreference) newErrors.foodPreference = "Required.";
    if (formData.address.trim().length < 5)
      newErrors.address = "At least 5 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");

      setFormData(initialFormData); // reset form
      setErrors({});
      setFormKey((prev) => prev + 1); // force rerender
    }
  };

  return (
    <div className="max-w-3xl mx-auto w-full px-4">
      <form
        key={formKey}
        onSubmit={handleSubmit}
        className="flex flex-col h-[80vh] bg-gray-100 rounded-lg shadow-md p-6 md:p-10"
      >
        {/* Scrollable Content */}
        <div className="overflow-y-auto pr-2 flex-1">
          <h2 className="text-2xl font-bold text-center mb-6">
            Tell Us About Yourself
          </h2>

          {/* Name */}
          <div className="mb-4">
            <label className="font-semibold">Your Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full bg-white border p-2 mt-1"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="font-semibold">Phone Number *</label>
            <div className="flex">
              <span className="px-3 py-2 border border-r-0 bg-gray-100">
                +91
              </span>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="w-full bg-white border p-2"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          {/* Meals */}
          <div className="mb-4">
            <label className="font-semibold">
              How many meals would you like? *
            </label>
            {meals.map((meal) => (
              <div key={meal}>
                <label className="flex items-center gap-2 mt-2">
                  <input
                    type="checkbox"
                    checked={formData.selectedMeals.includes(meal)}
                    onChange={() => toggleMeal(meal)}
                  />
                  {meal}
                </label>
                {formData.selectedMeals.includes(meal) && (
                  <div className="grid grid-cols-3 gap-2 mt-2 mb-4">
                    {daysOfWeek.map((day) => (
                      <button
                        type="button"
                        key={day}
                        onClick={() => toggleDay(meal, day)}
                        className={`border p-2 rounded ${
                          formData.mealDays[meal]?.includes(day)
                            ? "bg-gray-400 text-white"
                            : "bg-white"
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {errors.selectedMeals && (
              <p className="text-red-500 text-sm">{errors.selectedMeals}</p>
            )}
          </div>

          {/* Meal Type */}
          <div className="mb-4">
            <label className="font-semibold">
              What type of meals are you looking for? *
            </label>
            {mealTypes.map((type) => (
              <label key={type} className="flex items-center gap-2 mt-2">
                <input
                  type="radio"
                  name="mealType"
                  value={type}
                  checked={formData.mealType === type}
                  onChange={() => handleChange("mealType", type)}
                />
                {type}
              </label>
            ))}
          </div>

          {/* Food Preference */}
          <div className="mb-4">
            <label className="font-semibold">Your Food Preference *</label>
            {foodPreferences.map((pref) => (
              <label key={pref} className="flex items-center gap-2 mt-2">
                <input
                  type="radio"
                  name="foodPreference"
                  value={pref}
                  checked={formData.foodPreference === pref}
                  onChange={() => handleChange("foodPreference", pref)}
                />
                {pref}
              </label>
            ))}
            {errors.foodPreference && (
              <p className="text-red-500 text-sm">{errors.foodPreference}</p>
            )}
          </div>

          {/* Allergies */}
          <div className="mb-4">
            <label className="font-semibold">
              Allergies or Dietary Restrictions
            </label>
            <textarea
              rows="3"
              value={formData.allergies}
              onChange={(e) => handleChange("allergies", e.target.value)}
              className="w-full bg-white border p-2 mt-1"
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="font-semibold">Full Delivery Address *</label>
            <textarea
              rows="3"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className="w-full bg-white border p-2 mt-1"
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address}</p>
            )}
          </div>
        </div>

        {/* Fixed Buttons at Bottom (inside form) */}
        <div className="pt-4 border-t mt-4">
          <div className="flex justify-between gap-4">
            <button
              type="button"
              className="bg-gray-600 px-6 py-2 text-white font-semibold w-1/2 hover:bg-gray-500 duration-200"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-yellow-400 px-6 py-2 text-white font-semibold w-1/2 hover:bg-yellow-300 duration-200"
            >
              Save
            </button>
          </div>
          <p className="text-xs text-center mt-2 text-gray-600">
            By clicking 'Save' you agree to our{" "}
            <a href="#" className="underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
