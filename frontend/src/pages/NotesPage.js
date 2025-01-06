import React from 'react';

const NotesPage = () => {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-2xl font-bold text-center mb-4">Notes Management</h1>
      <div className="tabs">
        <div className="tab active">Notes</div>
        {/* Future tabs can be added here */}
      </div>
      <p className="text-center mt-4">Manage your notes efficiently!</p>
      {/* Notes CRUD functionality */}
    </div>
  );
};

export default NotesPage;
