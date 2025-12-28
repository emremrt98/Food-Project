'use client'
import { AuthProvider } from '@/app/_context/AuthContext'
import { LocaleProvider } from '@/app/_context/LocaleContext'
import Container from "../container/Container";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function ClientLayout({ children }) {
  return (
    <LocaleProvider>
      <AuthProvider>
        <Container>
          <Header />
        </Container>
        {children}
        <Footer />
      </AuthProvider>
    </LocaleProvider>
  )
}

