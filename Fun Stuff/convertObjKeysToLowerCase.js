// see how it behaves when the newObj is outside the map function and inside map function.
// if the newObj is declared outside map function - Key values will be overrided by the new object values if there's a match
// so the newObj needs to be always inside the map function.
function convertlowerCase(data) {
	var newArrObj = [];
	data.map(function (item) {
		var newobj = {};
		var key,
			keys = Object.keys(item);
		var n = keys.length;
		while (n--) {
			console.log(n);

			key = keys[n];
			newobj[key.toLowerCase()] = item[key];
		}
		newArrObj.push(newobj);
	});
	return newArrObj;
}

console.log(
	convertlowerCase([
		{
			region: "EMEAR-REGION",
			hq_party_id: "113556816",
			hq_party_name: "NAGEL LOGISTIK-HOLDING GMBH & CO. KG",
			best_site_cr_party_id: "3414785",
			best_site_cr_party_name: "KRAFTVERKEHR NAGEL GMBH & CO. KG",
			country_name: "GERMANY",
			sales_level_1: "EMEAR-REGION",
			sales_level_2: "EMEAR_GERMANY",
			sales_level_3: "COMMERCIAL_DEU",
			sales_level_4: "COM_DEU_NORTHEAST",
			sales_level_5: "COM_DEU_NORTH_TAM4",
			sales_level_6: "CSL_DEU_NORTH_AM4",
			campaign_name: "DDC Services Renewal",
			in_lca: "N",
			send_date: "2020-09-08",
			renewal_value_of_send: "2578.88",
			no_of_contracts_under_cr_party_id: "3",
			quote_included: "N",
			quote_id: null,
			email_address: "stefan.kittner@kv-nagel.com",
			contact_first_name: null,
			contact_last_name: null,
			contact_job_title: null,
			contact_phone_number: null,
			delivery_status: "Delivered",
			non_delivery_reason: null,
			total_opens: "5",
			total_click_throughs: "3",
			intent_to_buy: null,
			partner_id: "456159",
			partner_name: "LuConsult GmbH",
			type: "DDC",
			blast_date: "2020-09-04",
			bds_responder: null,
			bds_request_date: null,
			inbound_source: null,
			engaged_contact_name: null,
			engaged_contact_email: null,
			bds_request_category: null,
			bds_response_date: null,
			bds_outcome_category: null,
			next_pending_action: null,
			reason_for_not_renewing: null,
			refresh_date: "12/08/2020",
			totalCount: 1292709,
		},
	])
);
