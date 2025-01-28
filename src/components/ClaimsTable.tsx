const ClaimsTable = ({ claims }: any) => (
  <div>
    <input
      type="text"
      placeholder="Search claims..."
      className="w-full p-2 mb-4 bg-gray-800 text-gray-300 rounded-lg"
    />
    <table className="w-full bg-gray-800 rounded-lg">
      <thead>
        <tr className="text-gray-400">
          <th className="py-2 px-4">Date</th>
          <th className="py-2 px-4">Claim</th>
          <th className="py-2 px-4">Trust Score</th>
        </tr>
      </thead>
      <tbody>
        {claims.map((claim: any, index: number) => (
          <tr key={index} className="border-t border-gray-700">
            <td className="py-2 px-4">{claim.date}</td>
            <td className="py-2 px-4">{claim.claim}</td>
            <td className="py-2 px-4 text-green-400">{claim.trustScore}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ClaimsTable;
