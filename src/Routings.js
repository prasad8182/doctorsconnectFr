import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Treatments from './innerPages/Treatments'
import BookAppointment from './innerPages/BookAppointment'
import Offers from './innerPages/Offers'
import Blogs from './innerPages/Blogs'
import ContactUS from './innerPages/ContactUS'
import MainPage from './innerPages/MainPage'
import NoPage from './innerPages/NoPage'
import AdminDashboard from './Admin/AdminDashboard'
import AddTreatments from './Admin/AddTreatments'
import AddLocations from './Admin/AddLocations'
import AddDoctors from './Admin/AddDoctors'
import AddOffers from './Admin/AddOffers'
import DeleteTreatments from './Admin/DeleteTreatments'
import DeleteLocations from './Admin/DeleteLocations'
import DeleteDoctors from './Admin/DeleteDoctors'
import DeleteOffers from './Admin/DeleteOffers'
import BookAppointmentData from './Admin/BookAppointmentData'
import AssociatedHospitals from './Admin/AssociatedHospitals'
import DeleteHospitals from './Admin/DeleteHospitals'
import BlogsData from './Admin/BlogsData'
import AdminLogin from './Admin/AdminLogin'
import AdminRegister from './Admin/AdminRegister'
import ForgetPassword from './Admin/ForgetPassword'
import ResetPassword from './Admin/ResetPassword'
import Locations from './innerPages/Locations'
import Doctors from './innerPages/Doctors'
import AddBlogs from './Admin/AddBlogs'
import BlogAlone from './innerPages/BlogAlone'
import EditTreatment from './Admin/EditTreatment'
import EditLocation from './Admin/EditLocation'
import EditDoctor from './Admin/EditDoctor'
import Hospitals from './innerPages/Hospitals'

const Routings = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/treatments' element={<Treatments />} />
        <Route path='/hospitals' element={<Hospitals />} />
        <Route path='/locations/:id/:tname' element={<Locations />} />
        <Route path='/doctor/:tname/:location' element={<Doctors />} />
        <Route path='/bookappoint' element={<BookAppointment />} />
        <Route path='/bookappoint/:tname/:location/:dname' element={<BookAppointment />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogalone/:title' element={<BlogAlone />} />
        <Route path='/contactus' element={<ContactUS />} />

        <Route path='/admindashboard' element={<AdminDashboard />} >
          <Route path='' element={<AddTreatments />} />
          <Route path='addlocation' element={<AddLocations />} />
          <Route path='adddoctor' element={<AddDoctors />} />
          <Route path='addoffer' element={<AddOffers />} />

          <Route path='deletetreatment' element={<DeleteTreatments />} />
          <Route path='deletelocation' element={<DeleteLocations />} />
          <Route path='deletedoctor' element={<DeleteDoctors />} />
          <Route path='deleteoffer' element={<DeleteOffers />} />

          

          <Route path='bookappointmentData' element={<BookAppointmentData />} />
          <Route path='associatedhospital' element={<AssociatedHospitals />} />
          <Route path='deletehospital' element={<DeleteHospitals />} />
          <Route path='addblog' element={<AddBlogs />} />
          <Route path='deleteblog' element={<BlogsData />} />
        </Route>

        <Route path='editlocation/:id' element={<EditLocation />} />
        <Route path='edittreatment/:id' element={<EditTreatment />} />
        <Route path='editdoctor/:id' element={<EditDoctor />} />
        <Route path='adminlogin' element={<AdminLogin />} />
        <Route path='forgetpassword' element={<ForgetPassword />} />
        <Route path='resetpassword' element={<ResetPassword />} />
        <Route path='adminregister' element={<AdminRegister />} />
        <Route path='*' element={<NoPage />} />

      </Routes>
    </div>
  )
}

export default Routings