import { useReducer } from "react";
import DatePickerComponent from "../../components/DatePickerComponent";
import ModalWindow from "../../components/ModalWindow";

// Initial state for the reducer
const initialState = {
  title: '',
  amount: '',
  type: '',
  category: '',
  date: '',
  notes: ''
};

// Reducer function to handle state changes
const reducer = (state, action) => {
  switch (action.type) {
      case 'SET_FIELD':
          return { ...state, [action.field]: action.value };
      case 'SET_ERROR':
          return { ...state, error: action.error, successMessage: '' };
      case 'SET_SUCCESS_MESSAGE':
          return { ...state, successMessage: action.message, error: '' };
      default:
          return state;
  }
};

const AddTransactionComponent = ({onClose}) => {

  const handleChange = (e) => {
    dispatch({
        type: 'SET_FIELD',
        field: e.target.name,
        value: e.target.value,
    });
};
  
  return  <ModalWindow>
      <div className="relative rounded-lg border-2 border-slate-900 bg-slate-50 shadow-lg">
        <Header clickCloseHandler={onClose}/>
        {/* Modal body */}
        <form className="p-4 md:p-5">
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label
                htmlFor="title"
                className="mb-2 block font-medium text-slate-900"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-500 bg-slate-200 p-2.5 text-gray-900"
                placeholder="Eg. Gym fee"
                required
              />
            </div>
            <div className="col-span-1 ">
              <label
                htmlFor="amount"
                className="mb-2 block font-medium text-slate-900"
              >
                Amount (in ₹)
              </label>
              <input
                type="number"
                name="amount"
                id="amount"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-500 bg-slate-200 p-2.5 text-gray-900"
                placeholder="Eg. 600"
                required=""
              />
            </div>
            <div className="col-span-1 ">
              <label className="mt-10 me-5 inline-flex cursor-pointer items-center">
                <span className="me-1.5 font-medium text-slate-900">
                  Income
                </span>
                <input
                  type="checkbox"
                  defaultValue=""
                  className="peer sr-only"
                  defaultChecked=""
                />
                <div className="relative peer h-6 w-12 rounded-full bg-green-600 after:absolute after:start-[4px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full" />
                <span className="ms-1.5 font-medium text-slate-900">
                  Expense
                </span>
              </label>
            </div>
            
            <div className="col-span-1">
              <label
                htmlFor="category"
                className="mb-2 block font-medium text-slate-900"
              >
                Category
              </label>
              <select
                id="category"
                className=" focus:border-primary-500 block w-full rounded-lg border border-gray-500  p-2.5 text-sm text-gray-900 "
              >
                <option value="">Select category</option>
                <option value="TV">TV/Monitors</option>
                <option value="PC">PC</option>
                <option value="GA">Gaming/Console</option>
                <option value="PH">Phones</option>
              </select>
            </div>
            <div className='col-span-1'>
            <label
                htmlFor="category"
                className="mb-2 block font-medium text-slate-900"
              >
                Date
              </label>
              <DatePickerComponent />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="description"
                className="mb-2 block font-medium text-slate-900"
              >
                Add notes
              </label>
              <textarea
                id="description"
                rows={4}
                className="block w-full rounded-lg border focus:ring-primary-600 focus:border-primary-600 border-gray-500 bg-slate-200 p-2.5 text-gray-900"
                placeholder="Write product description here"
                defaultValue={""}
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 "
          >
            <svg
              className="-ms-1 me-1 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Add transaction
          </button>
        </form>
      </div>
  </ModalWindow>
}


export default AddTransactionComponent;



// SUB COMPONENTS

const Header = ({clickCloseHandler}) => <div className="flex items-center justify-between rounded-t border-b-2 border-slate-900 p-4">
<h3 className="font-serif text-lg font-bold text-slate-900">
  Add new transaction.
</h3>
<button
  type="button"
  className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-slate-900 hover:bg-slate-200"
  onClick={clickCloseHandler}
>
  <svg
    className="h-3 w-3"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 14"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
    />
  </svg>
</button>
</div>