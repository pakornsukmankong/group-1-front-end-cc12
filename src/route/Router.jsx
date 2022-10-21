import { Routes, Route } from 'react-router-dom'
import EmailLoginModal from '../components/Modal/EmailLoginModal'
import LoginRegisterModal from '../components/Modal/LoginRegisterModal'
import PhoneAuthModal from '../components/Modal/PhoneAuthModal'
import RegisterModal from '../components/Modal/RegisterModal'
import ReserveComponent from '../components/Modal/ReserveComponent'
import AuthLayout from '../layout/auth/AuthLayout'
import HomeLayout from '../layout/auth/HomeLayout'
import AccountPage from '../pages/AccountPage'
import BecomeHostPage from '../pages/BecomeHostPage'
import ConfirmPaymentPage from '../pages/ConfirmPaymentPage'
import HomePage from '../pages/HomePage'
import RoomPage from '../pages/RoomPage'
import WishlistPage from '../pages/WishlistPage'
import CreateHostPage from '../pages/CreateHostPage'
import TypeGroupContainer from '../feature/create-host/TypeGroupContainer'
import PropertyTypeContainer from '../feature/create-host/PropertyTypeContainer'
import PrivacyTypeContainer from '../feature/create-host/PrivacyTypeContainer'
import LocationContainer from '../feature/create-host/LocationContainer'
import FloorPlanContainer from '../feature/create-host/FloorPlanContainer'
import AmenitiesContainer from '../feature/create-host/AmenitiesContainer'
import PhotosContainer from '../feature/create-host/PhotosContainer'
import TitleContainer from '../feature/create-host/TitleContainer'
import DescriptionContainer from '../feature/create-host/DescriptionContainer'
import PriceContainer from '../feature/create-host/PriceContainer'
import PreviewContainer from '../feature/create-host/PreviewContainer'
import { useAuth } from '../contexts/AuthContext'

function Router() {
  const { user } = useAuth()
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/" element={<HomeLayout />}>
          {user ? (
            <>
              <Route path="/account/:id" element={<AccountPage />} />
              <Route path="/wishlists/:id" element={<WishlistPage />} />
              <Route
                path="/confirmPayment/:id"
                element={<ConfirmPaymentPage />}
              />
              <Route path="/becomeHosting" element={<BecomeHostPage />} />
            </>
          ) : (
            <>
              <Route path="/rooms/:id" element={<RoomPage />} />
              <Route path="*" element={<HomePage />} />
            </>
          )}
          {/* <Route path="/login" element={<LoginRegisterModal />}></Route> */}
          {/* <Route path='/loginEmail' element={<EmailLoginModal />}></Route>
					<Route path='/register' element={<RegisterModal />}></Route>
					<Route path='/phoneAuth' element={<PhoneAuthModal />}></Route>
					<Route path='/reserve' element={<ReserveComponent />}></Route> */}
        </Route>

        <Route path="/create-host">
          <Route path="intro" element={<CreateHostPage />} />
          <Route path="property-type-group" element={<TypeGroupContainer />} />
          <Route path="property-type/:id" element={<PropertyTypeContainer />} />
          <Route path="privacy-type/:id" element={<PrivacyTypeContainer />} />
          <Route path="location/:id" element={<LocationContainer />} />
          <Route path="floor-plan/:id" element={<FloorPlanContainer />} />
          <Route path="amenities/:id" element={<AmenitiesContainer />} />
          <Route path="photos/:id" element={<PhotosContainer />} />
          <Route path="title/:id" element={<TitleContainer />} />
          <Route path="description/:id" element={<DescriptionContainer />} />
          <Route path="price/:id" element={<PriceContainer />} />
          <Route path="preview/:id" element={<PreviewContainer />} />
        </Route>
      </Routes>
    </>
  )
}

export default Router
