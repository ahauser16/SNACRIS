import React from 'react';

const OtherDocumentsRows = ({ }) => {
    return (
        <>
            <tr >
                <td>CERTIFICATE (CERT)
                    <input
                        type="checkbox"
                        value="CERT"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="CERT"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="CERT"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    PARTY 2
                    <input
                        type="checkbox"
                        value="PARTY 2"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="CERT"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
            </tr>
            <tr >
                <td>CONSENT (CONS)
                    <input
                        type="checkbox"
                        value="CONS"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="CONS"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="CONS"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    NOT APPLICABLE
                </td>
            </tr>
            <tr >
                <td>COURT ORDER (CTOR)
                    <input
                        type="checkbox"
                        value="CTOR"
                        checked
                        onChange
                        data-row="CTOR"
                        data-column="doc_type"
                        data-doc-type="CTOR"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY 1/GRANTOR
                    <input
                        type="checkbox"
                        value="PARTY 1/GRANTOR"
                        checked
                        onChange
                        data-row="CTOR"
                        data-column="party1_type"
                        data-doc-type="CTOR"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    PARTY 2/GRANTEE
                    <input
                        type="checkbox"
                        value="PARTY 2/GRANTEE"
                        checked
                        onChange
                        data-row="CTOR"
                        data-column="party2_type"
                        data-doc-type="CTOR"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
            </tr>
            <tr >
                <td>DECLARATION (DECL)
                    <input
                        type="checkbox"
                        value="DECL"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="DECL"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="DECL"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    PARTY 2
                    <input
                        type="checkbox"
                        value="PARTY 2"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="DECL"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
            </tr>
            <tr >
                <td>DISCHARGE OF TAX LIEN (DTL)
                    <input
                        type="checkbox"
                        value="DTL"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="DTL"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    SECURED PARTY
                    <input
                        type="checkbox"
                        value="SECURED PARTY"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="DTL"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    NOT APPLICABLE
                </td>
            </tr>
            <tr >
                <td>JUDGMENT (JUDG)
                    <input
                        type="checkbox"
                        value="JUDG"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="JUDG"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="JUDG"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    PARTY 2
                    <input
                        type="checkbox"
                        value="PARTY 2"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="JUDG"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
            </tr>
            <tr >
                <td>LANDMARK DESIGNATION (LDMK)
                    <input
                        type="checkbox"
                        value="LDMK"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="LDMK"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="LDMK"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    PARTY 2
                    <input
                        type="checkbox"
                        value="PARTY 2"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="LDMK"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
            </tr>
            <tr >
                <td>LICENSE (LIC)
                    <input
                        type="checkbox"
                        value="LIC"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="LIC"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="LIC"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    PARTY 2
                    <input
                        type="checkbox"
                        value="PARTY 2"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="LIC"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
            </tr>
            <tr >
                <td>MAPS (MAPS)
                    <input
                        type="checkbox"
                        value="MAPS"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="MAPS"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="MAPS"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    NOT APPLICABLE
                </td>
            </tr>
            <tr >
                <td>MERGER (MERG)
                    <input
                        type="checkbox"
                        value="MERG"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="MERG"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="MERG"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    PARTY 2
                    <input
                        type="checkbox"
                        value="PARTY 2"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="MERG"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
            </tr>
            <tr >
                <td>MISCELLANEOUS (MISC)
                    <input
                        type="checkbox"
                        value="MISC"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="MISC"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="MISC"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    PARTY 2
                    <input
                        type="checkbox"
                        value="PARTY 2"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="MISC"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
            </tr>
            <tr >
                <td>POWER OF ATTORNEY (PAT)
                    <input
                        type="checkbox"
                        value="PAT"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="PAT"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY ONE
                    <input
                        type="checkbox"
                        value="PARTY ONE"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="PAT"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    PARTY TWO
                    <input
                        type="checkbox"
                        value="PARTY TWO"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="PAT"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
            </tr>
            <tr >
                <td>RESOLUTION (RESO)
                    <input
                        type="checkbox"
                        value="RESO"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="RESO"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="RESO"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    PARTY 2
                    <input
                        type="checkbox"
                        value="PARTY 2"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="RESO"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
            </tr>
            <tr >
                <td>REVOCATION OF POWER OF ATTORNEY (RPAT)
                    <input
                        type="checkbox"
                        value="RPAT"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="RPAT"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="RPAT"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    PARTY 2
                    <input
                        type="checkbox"
                        value="PARTY 2"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="RPAT"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
            </tr>
            <tr >
                <td>RELEASE OF ESTATE TAX LIEN (RTXL)
                    <input
                        type="checkbox"
                        value="RTXL"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="RTXL"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    DECEDENT
                    <input
                        type="checkbox"
                        value="DECEDENT"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="RTXL"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    NOT APPLICABLE
                </td>
            </tr>
            <tr >
                <td>SUNDRY AGREEMENT (SAGE)
                    <input
                        type="checkbox"
                        value="SAGE"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="SAGE"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="SAGE"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    PARTY 2
                    <input
                        type="checkbox"
                        value="PARTY 2"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="SAGE"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
            </tr>
            <tr >
                <td>SUNDRY MISCELLANEOUS (SMIS)
                    <input
                        type="checkbox"
                        value="SMIS"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="SMIS"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="SMIS"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    NOT APPLICABLE
                </td>
            </tr>
            <tr >
                <td>STREET PROCEDURE (STP)
                    <input
                        type="checkbox"
                        value="STP"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="STP"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="STP"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    PARTY 2
                    <input
                        type="checkbox"
                        value="PARTY 2"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="STP"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
            </tr>
            <tr >
                <td>TAX LIEN SALE CERTIFICATE (TLS)
                    <input
                        type="checkbox"
                        value="TLS"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="TLS"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="TLS"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    PARTY 2
                    <input
                        type="checkbox"
                        value="PARTY 2"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="TLS"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
            </tr>
            <tr >
                <td>TERMINATION OF TRUST (TERT)
                    <input
                        type="checkbox"
                        value="TERT"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="TERT"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="TERT"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    PARTY 2
                    <input
                        type="checkbox"
                        value="PARTY 2"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="TERT"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
            </tr>
            <tr >
                <td>CERTIFIED COPY OF WILL (WILL)
                    <input
                        type="checkbox"
                        value="WILL"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="WILL"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="WILL"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    PARTY 2
                    <input
                        type="checkbox"
                        value="PARTY 2"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="WILL"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
            </tr>
            <tr >
                <td>ASSIGNMENT OF LEASE (ASSTO)
                    <input
                        type="checkbox"
                        value="ASSTO"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="ASSTO"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="ASSTO"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    PARTY 2
                    <input
                        type="checkbox"
                        value="PARTY 2"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="ASSTO"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
            </tr>
            <tr >
                <td>NYS REAL ESTATE TRANSFER TAX (RETT)
                    <input
                        type="checkbox"
                        value="RETT"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="RETT"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    GRANTOR/SELLER
                    <input
                        type="checkbox"
                        value="GRANTOR/SELLER"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="RETT"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    GRANTEE/BUYER
                    <input
                        type="checkbox"
                        value="GRANTEE/BUYER"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="RETT"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
            </tr>
            <tr >
                <td>NYC REAL PROPERTY TRANSFER TAX (RPTT)
                    <input
                        type="checkbox"
                        value="RPTT"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="RPTT"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    GRANTOR/SELLER
                    <input
                        type="checkbox"
                        value="GRANTOR/SELLER"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="RPTT"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    GRANTEE/BUYER
                    <input
                        type="checkbox"
                        value="GRANTEE/BUYER"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="RPTT"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
            </tr>
            <tr >
                <td>AMENDMENT OF TAX LIEN (AMTL)
                    <input
                        type="checkbox"
                        value="AMTL"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="AMTL"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="AMTL"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    PARTY 2
                    <input
                        type="checkbox"
                        value="PARTY 2"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="AMTL"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
            </tr>
            <tr >
                <td>ASSIGNMENT OF TAX LIEN (ATL)
                    <input
                        type="checkbox"
                        value="ATL"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="ATL"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="ATL"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    PARTY 2
                    <input
                        type="checkbox"
                        value="PARTY 2"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="ATL"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
            </tr>
            <tr >
                <td>BOTH RPTT AND RETT (RPTT&RET)
                    <input
                        type="checkbox"
                        value="RPTT&RET"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="RPTT&RET"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    GRANTOR/SELLER
                    <input
                        type="checkbox"
                        value="GRANTOR/SELLER"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="RPTT&RET"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    GRANTEE/BUYER
                    <input
                        type="checkbox"
                        value="GRANTEE/BUYER"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="RPTT&RET"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
            </tr>
            <tr >
                <td>CORRECTION DOC-OFFICE USE ONLY (CORR)
                    <input
                        type="checkbox"
                        value="CORR"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="CORR"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="CORR"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    PARTY 2
                    <input
                        type="checkbox"
                        value="PARTY 2"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="CORR"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party3">
                    PARTY 3
                    <input
                        type="checkbox"
                        value="PARTY 3"
                        checked
                        onChange
                        data-column="party3_type"
                        data-doc-type="CORR"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
            </tr>
            <tr >
                <td>ZONING LOT DESCRIPTION (ZONE)
                    <input
                        type="checkbox"
                        value="ZONE"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="ZONE"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY ONE
                    <input
                        type="checkbox"
                        value="PARTY ONE"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="ZONE"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    NOT APPLICABLE
                </td>
                <td className="party3">
                    NOT APPLICABLE
                </td>
            </tr>
            <tr >
                <td>CANCEL/TERM ASGN L&R (CALR)
                    <input
                        type="checkbox"
                        value="CALR"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="CALR"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY ONE
                    <input
                        type="checkbox"
                        value="PARTY ONE"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="CALR"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    PARTY TWO
                    <input
                        type="checkbox"
                        value="PARTY TWO"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="CALR"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
            </tr>
            <tr >
                <td>AMENDED CONDO DECLARATION (ADEC)
                    <input
                        type="checkbox"
                        value="ADEC"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="ADEC"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY ONE
                    <input
                        type="checkbox"
                        value="PARTY ONE"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="ADEC"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    NOT APPLICABLE
                </td>
                <td className="party3">
                    NOT APPLICABLE
                </td>
            </tr>
            <tr >
                <td>LIEN OF COMMON CHARGES (LOCC)
                    <input
                        type="checkbox"
                        value="LOCC"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="LOCC"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY ONE/DEBTOR
                    <input
                        type="checkbox"
                        value="PARTY ONE/DEBTOR"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="LOCC"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    PARTY TWO/SECURED PA
                    <input
                        type="checkbox"
                        value="PARTY TWO/SECURED PA"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="LOCC"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party3">
                    NOT APPLICABLE
                </td>
            </tr>
            <tr >
                <td>LIEN OF COMMON CHARGES (TOLCC)
                    <input
                        type="checkbox"
                        value="TOLCC"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="TOLCC"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY ONE
                    <input
                        type="checkbox"
                        value="PARTY ONE"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="TOLCC"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    PARTY TWO
                    <input
                        type="checkbox"
                        value="PARTY TWO"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="TOLCC"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party3">
                    NOT APPLICABLE
                </td>
            </tr>
            <tr >
                <td>TERMINATION OF ASSIGN OF L&R (TL&R)
                    <input
                        type="checkbox"
                        value="TL&R"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="TL&R"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY ONE
                    <input
                        type="checkbox"
                        value="PARTY ONE"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="TL&R"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    PARTY TWO
                    <input
                        type="checkbox"
                        value="PARTY TWO"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="TL&R"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party3">
                    NOT APPLICABLE
                </td>
            </tr>
            <tr >
                <td>TERMINATION OF LEASE OR MEMO (TERL)
                    <input
                        type="checkbox"
                        value="TERL"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="TERL"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    LESSOR
                    <input
                        type="checkbox"
                        value="LESSOR"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="TERL"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    LESSEE
                    <input
                        type="checkbox"
                        value="LESSEE"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="TERL"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party3">
                    NOT APPLICABLE
                </td>
            </tr>
            <tr >
                <td>ESTOPPEL FOR OFFICE USE ONLY (ESTL)
                    <input
                        type="checkbox"
                        value="ESTL"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="ESTL"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    MORTGAGOR
                    <input
                        type="checkbox"
                        value="MORTGAGOR"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="ESTL"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    NYC
                    <input
                        type="checkbox"
                        value="NYC"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="ESTL"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party3">
                    NOT APPLICABLE
                </td>
            </tr>
            <tr >
                <td>ESTOPPAL REMOVAL OFFICE USE ON (ESRM)
                    <input
                        type="checkbox"
                        value="ESRM"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="ESRM"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY ONE
                    <input
                        type="checkbox"
                        value="PARTY ONE"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="ESRM"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    PARTY TWO
                    <input
                        type="checkbox"
                        value="PARTY TWO"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="ESRM"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party3">
                    NOT APPLICABLE
                </td>
            </tr>
            <tr >
                <td>TERMINATION OF AGREEMENT (TERA)
                    <input
                        type="checkbox"
                        value="TERA"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="TERA"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="TERA"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    PARTY 2
                    <input
                        type="checkbox"
                        value="PARTY 2"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="TERA"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party3">
                    NOT APPLICABLE
                </td>
            </tr>
            <tr >
                <td>TERMINATION OF CONDO DECLARATION (TERDECL)
                    <input
                        type="checkbox"
                        value="TERDECL"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="TERDECL"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="TERDECL"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party2">
                    PARTY 2
                    <input
                        type="checkbox"
                        value="PARTY 2"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="TERDECL"
                        data-class-code-description="OTHER DOCUMENTS"
                    />
                </td>
                <td className="party3">
                    NOT APPLICABLE
                </td>
            </tr>
        </>
    );
}

export default OtherDocumentsRows;