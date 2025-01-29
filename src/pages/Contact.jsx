const Contact = () => {
  return (
    <div className="flex justify-center text-2xl items-center min-h-screen bg-gray-100 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center sm:text-left">Contact Information</h2>
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <tbody>
            <tr>
              <td className="border border-gray-900 px-4 py-2 text-sm sm:text-base">For General Enquiries</td>
              <td className="border border-gray-900 px-4 py-2 text-sm sm:text-base truncate">icass2026@mru.edu.in</td>
            </tr>
            <tr>
              <td className="border border-gray-900 px-4 py-2 text-sm sm:text-base">For Conference related Enquiries</td>
              <td className="border border-gray-900 px-4 py-2 text-sm sm:text-base truncate">icass2026@mru.edu.in</td>
            </tr>
            <tr>
              <td className="border border-gray-900 px-4 py-2 text-sm sm:text-base">For Paper Submission Enquiries</td>
              <td className="border border-gray-900 px-4 py-2 text-sm sm:text-base truncate">icass2026@mru.edu.in</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
