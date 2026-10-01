import React from 'react';
import { useSelector } from 'react-redux';
import { showUsers } from "../slice/UserSlice";
const Profile = () => {
    const userEmail = sessionStorage.getItem('userLoggedIn') || 'customer@example.com';
     const customerName=useSelector((state)=>state.userReducer.userName);
     const mybookingDetails=useSelector((state)=>state.userReducer.myBookings);
     console.log(mybookingDetails);
     console.log(mybookingDetails[0].contactNumber)
    const customer = {
        name: customerName,
        email: userEmail,
        phone: mybookingDetails[0].contactNumber,
        city: sessionStorage.getItem('customerCity') || 'Bengaluru',
        memberSince: sessionStorage.getItem('customerMemberSince') || '12 Aug 2024',
        role: 'Customer',
        status: 'Active',
    };

    const detailCards = [
        { label: 'Full Name', value: customer.name },
        { label: 'Email Address', value: customer.email },
        { label: 'Mobile Number', value: customer.phone },
        { label: 'City', value: customer.city },
        { label: 'Member Since', value: customer.memberSince },
        { label: 'Account Type', value: customer.role },
    ];

    return (
        <div style={{
            maxWidth: '1100px',
            margin: '40px auto',
            padding: '0 20px',
            color: '#1f2937',
            fontFamily: 'Arial, sans-serif',
        }}>
            <div style={{
                background: 'linear-gradient(135deg, #1e3a8a, #2563eb)',
                color: '#fff',
                borderRadius: '20px',
                padding: '30px 32px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '20px',
                boxShadow: '0 18px 36px rgba(37, 99, 235, 0.25)',
            }}>
                <div>
                    <p style={{ margin: 0, opacity: 0.85, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '12px' }}>
                        Customer Profile
                    </p>
                    <h1 style={{ margin: '10px 0 0', fontSize: '34px' }}>{customer.name}</h1>
                </div>
                <div style={{
                    background: 'rgba(255,255,255,0.16)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    padding: '10px 18px',
                    borderRadius: '999px',
                    fontWeight: 'bold',
                    whiteSpace: 'nowrap',
                }}>
                    {customer.status}
                </div>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1.4fr 0.9fr',
                gap: '28px',
                marginTop: '28px',
            }}>
                <div style={{
                    background: '#ffffff',
                    borderRadius: '18px',
                    boxShadow: '0 12px 28px rgba(15, 23, 42, 0.08)',
                    padding: '28px',
                }}>
                    <h2 style={{ margin: '0 0 20px', fontSize: '24px' }}>Personal Information</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '18px' }}>
                        {detailCards.map((item) => (
                            <div key={item.label} style={{
                                background: '#f8fafc',
                                border: '1px solid #e2e8f0',
                                borderRadius: '12px',
                                padding: '16px',
                            }}>
                                <p style={{ margin: '0 0 8px', color: '#64748b', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                                    {item.label}
                                </p>
                                <p style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#0f172a' }}>
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{
                    background: '#ffffff',
                    borderRadius: '18px',
                    boxShadow: '0 12px 28px rgba(15, 23, 42, 0.08)',
                    padding: '28px',
                }}>
                    <h2 style={{ margin: '0 0 20px', fontSize: '24px' }}>Booking Summary</h2>

                    <div style={{ display: 'grid', gap: '14px' }}>
                        <div style={{ background: '#ecfdf5', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '16px' }}>
                            <p style={{ margin: 0, color: '#166534', fontWeight: '700' }}>Trips Completed</p>
                            <p style={{ margin: '8px 0 0', fontSize: '28px', fontWeight: '700', color: '#14532d' }}>12</p>
                        </div>

                        <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '16px' }}>
                            <p style={{ margin: 0, color: '#1d4ed8', fontWeight: '700' }}>Upcoming Ride</p>
                            <p style={{ margin: '8px 0 0', fontSize: '18px', fontWeight: '600', color: '#1e3a8a' }}>{mybookingDetails[0].carName}</p>
                        </div>

                        <div style={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '12px', padding: '16px' }}>
                            <p style={{ margin: 0, color: '#c2410c', fontWeight: '700' }}>Preferred Category</p>
                            <p style={{ margin: '8px 0 0', fontSize: '18px', fontWeight: '600', color: '#9a4d11' }}>Premium SUV</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
