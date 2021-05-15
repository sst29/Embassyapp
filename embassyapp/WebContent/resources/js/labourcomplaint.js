$(document).ready(function() {

   var columnDefs = [
        {
        data: "compliant_no",
        title: "compliant Number",
        type: "readonly"
        },
        {
        data: "compliant_date",
        title: "Date"
        },
        {
        data: "compliant_name",
        title: "Name"
        },
        {
        data: "sex",
        title: "Sex"
        },
        {
        data: "passport_number",
        title: "Passport Number."
        },
        {
        data: "place_of_issue",
        title: "Place Of Issue"
        },
        {
        data: "date_of_birth",
        title: "Date Of Birth"
        },
        {
        data: "civil_id_number",
        title: "Civil Id Num"
        },
        {
        data: "age",
        title: "Age"
        },
        {
        data: "status_of_e_migrate",
        title: "Status of e-Migrate"
        },
        {
        data: "address_in_India",
        title: "Address In India"
        },
        {
        data: "contant_person_kuwait",
        title: "Contact Person in Kuwait"
        },
        {
        data: "arival_date_in-kuwait",
        title: "Arival Date in Kuwait"
        },
        {
        data: "agent_details",
        title: "Agent Details"
        },
        {
        data: "name",
        title: "Name"
        },
        {
        data: "adress",
        title: "Address"
        },
        {
        data: "tel_no",
        title: "Tel No"
        },
        {
        data: "amount_paid",
        title: "Amount Paid to Agent"
        },
        {
        data: "name_of_company",
        title: "Nme of Company & Contact Details"
        },
        {
        data: "status_of_residency",
        title: "Status of Residency Expaired/Valid"
        },
        {
        data: "date_of_expiry",
        title: "Date Of Expiry"
        },
        {
        data: "date_on_whci_worker",
        title: "Date on which worker left company"
        },
        {
        data: "case_field",
        title: "Case Fiels with PAM(Shoun)"
        },
        {
        data: "reason_for_not_fillinf_case",
        title: "Reason for not filling the case with PAM"
        },
        {
        data: "status_of_any_case",
        title: "Status of any Case(Civil/Criminal) Aginst the worker"
        },
        {
        data: "details_of_compliant",
        title: "Details Of Compliant"
        },
        {
        data: "promissed_job",
        title: "Promissed Job"
        },
        {
        data: "actual_job_given",
        title: "Actual Job Given"
        },
        {
        data: "promissed_salary_kd",
        title: "Promissed Salary in KD"
        },
        {
        data: "actual_salary_kd",
        title: "Actual salary received in KD"
        },
        {
        data: "pending_salary",
        title: "Pending Salary"
        }
    ];

    var myTable;

    //var url_ws_mock_get = './resources/js/mock_svc_load.json';
   // var url_ws_mock_ok = './resources/js/mock_svc_ok.json';
    if (location.href.startsWith("file://")) {
        // local URL's are not allowed
        //url_ws_mock_get = './getallUsers';
       // url_ws_mock_ok = './getallUsers2';
    }

    myTable = $('#example').DataTable({
        "sPaginationType": "full_numbers",
        ajax: {
            url : './getlabourcomplaint',
            // our data is an array of objects, in the root node instead of /data node, so we need 'dataSrc' parameter
            dataSrc : ''
        },
        columns: columnDefs,
        dom: 'Bfrtip',        // Needs button container
        select: 'single',
        responsive: true,
        altEditor: true,     // Enable altEditor
        buttons: [
            /*{
                text: 'Add',
                name: 'add'        // do not change name
            },*/
            {
                extend: 'selected', // Bind to Selected row
                text: 'Edit',
                name: 'edit'        // do not change name
            },
            {
                extend: 'selected', // Bind to Selected row
                text: 'Delete',
                name: 'delete'      // do not change name
            },
            {
                text: 'Refresh',
                name: 'refresh'      // do not change name
            }
        ],
        onAddRow: function(datatable, rowdata, success, error) {
            $.ajax({
                // a tipycal url would be / with type='PUT'
                url: url_ws_mock_ok,
                type: 'GET',
                data: rowdata,
                success: success,
                error: error
            });
        },
        onDeleteRow: function(datatable, rowdata, success, error) {
            $.ajax({
                // a tipycal url would be /{id} with type='DELETE'
                url: url_ws_mock_ok,
                type: 'GET',
                data: rowdata,
                success: success,
                error: error
            });
        },
        onEditRow: function(datatable, rowdata, success, error) {
            $.ajax({
                // a tipycal url would be /{id} with type='POST'
                url: url_ws_mock_ok,
                type: 'GET',
                data: rowdata,
                success: success,
                error: error
            });
        }
    });


});

