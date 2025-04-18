import React from "react";
import { useForm } from "react-hook-form";

export const ExpenseForm = ({ addExpense }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <form
      action=""
      className="mb-5"
      onSubmit={handleSubmit((data) => {
        addExpense(data)
        reset()
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          id="description"
          type="text"
          className="form-control"
          {...register("description", { minelength: 6, required: true })}
        />
        {errors.description?.type == "required" && (
          <p className="text-danger">This Field Is Required</p>
        )}
        {errors.description?.type == "minlength" && (
          <p className="text-danger">
            This Field Requires At Least 6 Characters
          </p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          className="form-control"
          {...register("amount", { required: true })}
        />
        {errors.amount?.type == "required" && (
          <p className="text-danger">This Field Is Required</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          name=""
          id=""
          className="form-select"
          {...register("category", { required: true })}
        >
          <option value=""></option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
          <option value="groceries">Groceries</option>
        </select>
        {errors.category?.type == "required" && (
          <p className="text-danger">This Field Is Required</p>
        )}
      </div>

      <button className="btn btn-primary">Submit</button>
    </form>
  );
};
