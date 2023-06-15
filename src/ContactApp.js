// import React, { useState } from 'react';
// import './App.css';

// const ContactApp = () => {
//   const [contacts, setContacts] = useState([]);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newContact = { name, email };
//     setContacts([...contacts, newContact]);
//     setName('');
//     setEmail('');
//   };

//   return (
//     <div className="app">
//       <h1>Contact App</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={handleNameChange}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={handleEmailChange}
//           required
//         />
//         <button type="submit">Add Contact</button>
//       </form>
//       <ul>
//         {contacts.map((contact, index) => (
//           <li key={index}>
//             <span>{contact.name}</span>
//             <span>{contact.email}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ContactApp;


// import React, { useState } from 'react';
// import './App.css';

// const ContactApp = () => {
//   const [contacts, setContacts] = useState([]);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [selectedContact, setSelectedContact] = useState(null);

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newContact = { name, email };
//     setContacts([...contacts, newContact]);
//     setName('');
//     setEmail('');
//   };

//   const handleContactClick = (index) => {
//     setSelectedContact(index);
//   };

//   const handleBackClick = () => {
//     setSelectedContact(null);
//   };

//   return (
//     <div className="app">
//       <h1>Contact App</h1>

//       {selectedContact !== null ? (
//         <>
//           <button className="back-button" onClick={handleBackClick}>
//             Back
//           </button>
//           <div className="contact-details">
//             <h2>Contact Details</h2>
//             <p>Name: {contacts[selectedContact]?.name}</p>
//             <p>Email: {contacts[selectedContact]?.email}</p>
//           </div>
//         </>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={handleNameChange}
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//           />
//           <button type="submit">Add Contact</button>
//         </form>
//       )}

//       <ul>
//         {contacts.map((contact, index) => (
//           <li key={index} onClick={() => handleContactClick(index)}>
//             <span>{contact.name}</span>
//             <span>{contact.email}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ContactApp;


// import React, { useState } from 'react';
// import './App.css';

// const ContactApp = () => {
//   const [contacts, setContacts] = useState([]);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [selectedContact, setSelectedContact] = useState(null);

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleMobileChange = (event) => {
//     setMobile(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newContact = { name, email, mobile };
//     setContacts([...contacts, newContact]);
//     setName('');
//     setEmail('');
//     setMobile('');
//   };

//   const handleContactClick = (index) => {
//     setSelectedContact(index);
//   };

//   const handleBackClick = () => {
//     setSelectedContact(null);
//   };

//   return (
//     <div className="app">
//       <h1>Contact App</h1>

//       {selectedContact !== null ? (
//         <>
//           <button className="back-button" onClick={handleBackClick}>
//             Back
//           </button>
//           <div className="contact-details">
//             <h2>Contact Details</h2>
//             <p>Name: {contacts[selectedContact]?.name}</p>
//             <p>Email: {contacts[selectedContact]?.email}</p>
//             <p>Mobile: {contacts[selectedContact]?.mobile}</p>
//           </div>
//         </>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={handleNameChange}
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//           />
//           <input
//             type="tel"
//             placeholder="Mobile"
//             value={mobile}
//             onChange={handleMobileChange}
//             required
//           />
//           <button type="submit">Add Contact</button>
//         </form>
//       )}

//       <ul>
//         {contacts.map((contact, index) => (
//           <li key={index} onClick={() => handleContactClick(index)}>
//             <span>{contact.name}</span>
//             <span>{contact.email}</span>
//             <span>{contact.mobile}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ContactApp;

// import React, { useState } from 'react';
// import './App.css';

// const ContactApp = () => {
//   const [contacts, setContacts] = useState([]);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [selectedContact, setSelectedContact] = useState(null);
//   const [showDetails, setShowDetails] = useState(false);

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleMobileChange = (event) => {
//     setMobile(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newContact = { name, email, mobile };
//     setContacts([...contacts, newContact]);
//     setName('');
//     setEmail('');
//     setMobile('');
//   };

//   const handleContactClick = (index) => {
//     setSelectedContact(index);
//     setShowDetails(true);
//   };

//   const handleBackClick = () => {
//     setSelectedContact(null);
//     setShowDetails(false);
//   };

//   return (
//     <div className="app">
//       <h1>Contact App</h1>

//       {showDetails ? (
//         <>
//           <button className="back-button" onClick={handleBackClick}>
//             Back
//           </button>
//           <div className="contact-details">
//             <h2>Contact Details</h2>
//             <p>Name: {contacts[selectedContact]?.name}</p>
//             <p>Email: {contacts[selectedContact]?.email}</p>
//             <p>Mobile: {contacts[selectedContact]?.mobile}</p>
//           </div>
//         </>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={handleNameChange}
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//           />
//           <input
//             type="tel"
//             placeholder="Mobile"
//             value={mobile}
//             onChange={handleMobileChange}
//             required
//           />
//           <button type="submit">Add Contact</button>
//         </form>
//       )}

//       <ul>
//         {contacts.map((contact, index) => (
//           <li key={index}>
//             <span>{contact.name}</span>
//             <span>{contact.email}</span>
//             <button onClick={() => handleContactClick(index)}>Details</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ContactApp;


// import React, { useState } from 'react';
// import './App.css';

// const ContactApp = () => {
//   const [contacts, setContacts] = useState([]);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [selectedContact, setSelectedContact] = useState(null);
//   const [showDetails, setShowDetails] = useState(false);
//   const [editingContact, setEditingContact] = useState(null);

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleMobileChange = (event) => {
//     setMobile(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (editingContact !== null) {
//       // Update existing contact
//       const updatedContact = { ...contacts[editingContact], name, email, mobile };
//       const updatedContacts = [...contacts];
//       updatedContacts[editingContact] = updatedContact;
//       setContacts(updatedContacts);
//       setEditingContact(null);
//     } else {
//       // Add new contact
//       const newContact = { name, email, mobile };
//       setContacts([...contacts, newContact]);
//     }
//     setName('');
//     setEmail('');
//     setMobile('');
//   };

//   const handleContactClick = (index) => {
//     setSelectedContact(index);
//     setShowDetails(true);
//   };

//   const handleEditContact = (index) => {
//     const selectedContact = contacts[index];
//     setName(selectedContact.name);
//     setEmail(selectedContact.email);
//     setMobile(selectedContact.mobile);
//     setEditingContact(index);
//     setShowDetails(false);
//   };

//   const handleDeleteContact = (index) => {
//     const updatedContacts = [...contacts];
//     updatedContacts.splice(index, 1);
//     setContacts(updatedContacts);
//     setSelectedContact(null);
//     setShowDetails(false);
//     setEditingContact(null);
//   };

//   const handleBackClick = () => {
//     setSelectedContact(null);
//     setShowDetails(false);
//     setEditingContact(null);
//   };

//   return (
//     <div className="app">
//       <h1>Contact App</h1>

//       {showDetails ? (
//         <>
//           <button className="back-button" onClick={handleBackClick}>
//             Back
//           </button>
//           <div className="contact-details">
//             <h2>Contact Details</h2>
//             <p>Name: {contacts[selectedContact]?.name}</p>
//             <p>Email: {contacts[selectedContact]?.email}</p>
//             <p>Mobile: {contacts[selectedContact]?.mobile}</p>
//             <button onClick={() => handleEditContact(selectedContact)}>Edit</button>
//             <button onClick={() => handleDeleteContact(selectedContact)}>Delete</button>
//           </div>
//         </>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={handleNameChange}
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//           />
//           <input
//             type="tel"
//             placeholder="Mobile"
//             value={mobile}
//             onChange={handleMobileChange}
//             required
//           />
//           <button type="submit">{editingContact !== null ? 'Update Contact' : 'Add Contact'}</button>
//         </form>
//       )}

//       <ul>
//         {contacts.map((contact, index) => (
//           <li key={index}>
//             <span>{contact.name}</span>
//             <span>{contact.email}</span>
//             <button onClick={() => handleContactClick(index)}>Details</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ContactApp;

// import React, { useState } from 'react';
// import './App.css';

// const defaultContacts = [
//   { name: 'John Doe', email: 'john@example.com', mobile: '1234567890' },
//   { name: 'Jane Smith', email: 'jane@example.com', mobile: '9876543210' },
//   { name: 'Alice Johnson', email: 'alice@example.com', mobile: '5555555555' },
//   { name: 'Bob Anderson', email: 'bob@example.com', mobile: '9999999999' },
//   { name: 'Eve Wilson', email: 'eve@example.com', mobile: '1111111111' },
//   { name: 'David Brown', email: 'david@example.com', mobile: '7777777777' },
//   { name: 'Sarah Davis', email: 'sarah@example.com', mobile: '2222222222' },
//   { name: 'Michael Taylor', email: 'michael@example.com', mobile: '8888888888' },
//   { name: 'Emily Miller', email: 'emily@example.com', mobile: '3333333333' },
//   { name: 'Andrew Wilson', email: 'andrew@example.com', mobile: '6666666666' },
// ];

// const ContactApp = () => {
//   const [contacts, setContacts] = useState(defaultContacts);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [selectedContact, setSelectedContact] = useState(null);
//   const [showDetails, setShowDetails] = useState(false);
//   const [editingContact, setEditingContact] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleMobileChange = (event) => {
//     setMobile(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (editingContact !== null) {
//       // Update existing contact
//       const updatedContact = { ...contacts[editingContact], name, email, mobile };
//       const updatedContacts = [...contacts];
//       updatedContacts[editingContact] = updatedContact;
//       setContacts(updatedContacts);
//       setEditingContact(null);
//     } else {
//       // Add new contact
//       const newContact = { name, email, mobile };
//       setContacts([...contacts, newContact]);
//     }
//     setName('');
//     setEmail('');
//     setMobile('');
//   };

//   const handleContactClick = (index) => {
//     setSelectedContact(index);
//     setShowDetails(true);
//   };

//   const handleEditContact = (index) => {
//     const selectedContact = contacts[index];
//     setName(selectedContact.name);
//     setEmail(selectedContact.email);
//     setMobile(selectedContact.mobile);
//     setEditingContact(index);
//     setShowDetails(false);
//   };

//   const handleDeleteContact = (index) => {
//     const updatedContacts = [...contacts];
//     updatedContacts.splice(index, 1);
//     setContacts(updatedContacts);
//     setSelectedContact(null);
//     setShowDetails(false);
//     setEditingContact(null);
//   };

//   const handleBackClick = () => {
//     setSelectedContact(null);
//     setShowDetails(false);
//     setEditingContact(null);
//   };

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredContacts = contacts.filter(
//     (contact) =>
//       contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       contact.mobile.includes(searchQuery)
//   );

//   return (
//     <div className="app">
//       <h1>Contact App</h1>

//       {showDetails ? (
//         <>
//           <button className="back-button" onClick={handleBackClick}>
//             Back
//           </button>
//           <div className="contact-details">
//             <h2>Contact Details</h2>
//             <p>Name: {contacts[selectedContact]?.name}</p>
//             <p>Email: {contacts[selectedContact]?.email}</p>
//             <p>Mobile: {contacts[selectedContact]?.mobile}</p>
//             <button onClick={() => handleEditContact(selectedContact)}>Edit</button>
//             <button onClick={() => handleDeleteContact(selectedContact)}>Delete</button>
//           </div>
//         </>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={handleNameChange}
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//           />
//           <input
//             type="tel"
//             placeholder="Mobile"
//             value={mobile}
//             onChange={handleMobileChange}
//             required
//           />
//           <button type="submit">{editingContact !== null ? 'Update Contact' : 'Add Contact'}</button>
//         </form>
//       )}

//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search Contacts"
//           value={searchQuery}
//           onChange={handleSearchChange}
//         />
//       </div>

//       <ul>
//         {filteredContacts.map((contact, index) => (
//           <li key={index}>
//             <span>{contact.name}</span>
//             <span>{contact.email}</span>
//             <span>{contact.mobile}</span>
//             <button onClick={() => handleContactClick(index)}>Details</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ContactApp;


import React, { useState } from 'react';
import './App.css';

const defaultContacts = [
  { name: 'John Doe', email: 'john@example.com', mobile: '1234567890' },
  { name: 'Jane Smith', email: 'jane@example.com', mobile: '9876543210' },
  { name: 'Alice Johnson', email: 'alice@example.com', mobile: '5555555555' },
  { name: 'Bob Anderson', email: 'bob@example.com', mobile: '9999999999' },
  { name: 'Eve Wilson', email: 'eve@example.com', mobile: '1111111111' },
  { name: 'David Brown', email: 'david@example.com', mobile: '7777777777' },
  { name: 'Sarah Davis', email: 'sarah@example.com', mobile: '2222222222' },
  { name: 'Michael Taylor', email: 'michael@example.com', mobile: '8888888888' },
  { name: 'Emily Miller', email: 'emily@example.com', mobile: '3333333333' },
  { name: 'Andrew Wilson', email: 'andrew@example.com', mobile: '6666666666' },
];

const ContactApp = () => {
  const [contacts, setContacts] = useState(defaultContacts);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Input validation
    if (!name || !email || !mobile) {
      setError('Please fill in all fields');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!validateMobile(mobile)) {
      setError('Please enter a valid mobile number');
      return;
    }

    setError('');

    if (editingContact !== null) {
      // Update existing contact
      const updatedContact = { ...contacts[editingContact], name, email, mobile };
      const updatedContacts = [...contacts];
      updatedContacts[editingContact] = updatedContact;
      setContacts(updatedContacts);
      setEditingContact(null);
    } else {
      // Add new contact
      const newContact = { name, email, mobile };
      setContacts([...contacts, newContact]);
    }

    setName('');
    setEmail('');
    setMobile('');
  };

  const handleContactClick = (index) => {
    setSelectedContact(index);
    setShowDetails(true);
  };

  const handleEditContact = (index) => {
    const selectedContact = contacts[index];
    setName(selectedContact.name);
    setEmail(selectedContact.email);
    setMobile(selectedContact.mobile);
    setEditingContact(index);
    setShowDetails(false);
    setError('');
  };

  const handleDeleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
    setSelectedContact(null);
    setShowDetails(false);
    setError('');
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Helper function to validate email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Helper function to validate mobile number
  const validateMobile = (mobile) => {
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile);
  };

  // Filter contacts based on search query
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.mobile.includes(searchQuery)
  );

  // Sort contacts by name in ascending order
  const sortedContacts = filteredContacts.sort((a, b) => a.name.localeCompare(b.name));

  
  return (
    <div className="app">
      <h1>Contact App</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="tel"
          placeholder="Mobile"
          value={mobile}
          onChange={handleMobileChange}
          required
        />
        <button type="submit">{editingContact !== null ? 'Update Contact' : 'Add Contact'}</button>
      </form>

      <div className="error">{error}</div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search Contacts"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <ul>
        {sortedContacts.map((contact, index) => (
          <li key={index}>
            <span>{contact.name}</span>
            <span>{contact.email}</span>
            <span>{contact.mobile}</span>
            <button onClick={() => handleContactClick(index)}>Details</button>
            <button onClick={() => handleEditContact(index)}>Edit</button>
            <button onClick={() => handleDeleteContact(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {selectedContact !== null && (
        <div className="contact-details">
          <button className="back-button" onClick={() => setShowDetails(false)}>
            Back
          </button>
          <h2>Contact Details</h2>
          <p>
            <strong>Name:</strong> {filteredContacts[selectedContact].name}
          </p>
          <p>
            <strong>Email:</strong> {filteredContacts[selectedContact].email}
          </p>
          <p>
            <strong>Mobile:</strong> {filteredContacts[selectedContact].mobile}
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactApp;
