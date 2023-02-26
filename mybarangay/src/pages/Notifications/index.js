import ClientSideTable from "../../components/ClientSideTable";
const Notifications = () => {
    const actionButton = (cell, row) => {
        return (
          <>
            <div className="action-buttons">
              <button className="btn btn-link">
                <i className="fa fa-eye"></i>
              </button>
            </div>
          </>
        );
      };
      const columns = [
        {
          dataField: "_id",
          text: "S.No",
        },
        {
          dataField: "targeted_user",
          text: "Targeted User",
        },
        {
          dataField: "notification_title",
          text: "Notification Title",
        },
        {
          dataField: "notification_create",
          text: "Notification Create",
        },
        {
          dataField: "sent_on",
          text: "Sent on",
        },
        {
          dataField: "status",
          text: "Status",
        },
        {
          dataField: "action",
          text: "Action",
          formatter: actionButton,
        },
      ];
      const data = [
        {
          _id: 1,
          targeted_user: "targeted_user",
          notification_title: "notification_title",
          notification_create: "notification_create",
          sent_on: "sent_on",
          status: "status",
        },
        {
          _id: 2,
          targeted_user: "targeted_user",
          notification_title: "notification_title",
          notification_create: "notification_create",
          sent_on: "sent_on",
          status: "status",
        },
        {
          _id: 12,
          targeted_user: "targeted_user",
          notification_title: "notification_title",
          notification_create: "notification_create",
          sent_on: "sent_on",
          status: "status",
        },
        {
          _id: 3,
          targeted_user: "targeted_user",
          notification_title: "notification_title",
          notification_create: "notification_create",
          sent_on: "sent_on",
          status: "status",
        },
        {
          _id: 344,
          targeted_user: "targeted_user",
          notification_title: "notification_title",
          notification_create: "notification_create",
          sent_on: "sent_on",
          status: "status",
        },
        {
          _id: 31,
          targeted_user: "targeted_user",
          notification_title: "notification_title",
          notification_create: "notification_create",
          sent_on: "sent_on",
          status: "status",
        },
      ];
      return (
        <div>
            <h4 className="title">Notifications</h4>
          <ClientSideTable columns={columns} data={data} />
        </div>
      );
}
export default Notifications