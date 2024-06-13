import React from 'react';
import { useNavigate } from 'react-router-dom';

const CompanyDoc = ({ Data }) => {
    const supplierData = Data && Data.length > 0 ? Data[0] : {};

    if (!supplierData || !supplierData.tax_registration_document) {
        return <div>No data available</div>;
    }
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Company Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DocumentCard
                    title="Tax Registration Document"
                    file={supplierData?.tax_registration_document}
                />
                <DocumentCard
                    title="Business Registration License"
                    file={supplierData?.business_registration_license_document}
                    expireDate={supplierData?.business_registration_license_expire_date}
                />
                <DocumentCard
                    title="Business Permits Document"
                    file={supplierData?.business_permits_document}
                    expireDate={supplierData?.business_permits_expire_date}
                />
                <DocumentCard
                    title="Other Legal Document"
                    file={supplierData?.other_legal_document}
                />
            </div>
        </div>
    );
};

const DocumentCard = ({ title, file, expireDate }) => (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
        <h3 className="text-xl font-medium text-gray-700 mb-2">{title}</h3>
        <div className="text-gray-600">
            <div className="mb-2">
                <a href={`/${file}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    View Document
                </a>
            </div>
            {expireDate && (
                <div className="text-gray-600">
                    <span className="font-semibold">Expires on: </span>
                    <span>{new Date(expireDate).toLocaleDateString()}</span>
                </div>
            )}
        </div>
    </div>
);

export default CompanyDoc;
