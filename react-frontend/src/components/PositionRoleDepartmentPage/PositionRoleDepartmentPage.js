import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import _ from "lodash";
import { Button } from "primereact/button";
import { SplitButton } from "primereact/splitbutton";
import AreYouSureDialog from "../common/AreYouSureDialog";
import PositionRoleDepartmentDatatable from "./PositionRoleDepartmentDataTable";
import PositionRoleDepartmentEditDialogComponent from "./PositionRoleDepartmentEditDialogComponent";
import PositionRoleDepartmentCreateDialogComponent from "./PositionRoleDepartmentCreateDialogComponent";
import PositionRoleDepartmentFakerDialogComponent from "./PositionRoleDepartmentFakerDialogComponent";
import PositionRoleDepartmentSeederDialogComponent from "./PositionRoleDepartmentSeederDialogComponent";

const PositionRoleDepartmentPage = (props) => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [showAreYouSureDialog, setShowAreYouSureDialog] = useState(false);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showCreateDialog, setShowCreateDialog] = useState(false);
    const [showFakerDialog, setShowFakerDialog] = useState(false);
    const [showDeleteAllDialog, setShowDeleteAllDialog] = useState(false);
    const [showSeederDialog, setShowSeederDialog] = useState(false);
    const [selectedEntityIndex, setSelectedEntityIndex] = useState();
    const urlParams = useParams();

    useEffect(() => {
        //on mount
        client
            .service("positionRoleDepartment")
            .find({ query: { $limit: 10000 , $populate : [
                {
                path: "createdBy",
                service: "users",
                select: ["name"],
              },            {
                path: "updatedBy",
                service: "users",
                select: ["name"],
              },{
                        path : "userId",
                        service : "users",
                        select:["name"]
                    },{
                        path : "positionId",
                        service : "refPositions",
                        select:["position"]
                    },{
                        path : "roleId",
                        service : "roles",
                        select:["roles"]
                    },{
                        path : "departmentId",
                        service : "departments",
                        select:["department"]
                    }
            ] }})
            .then((res) => {
                let results = res.data;
                 
                setData(results);
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "PositionRoleDepartment", type: "error", message: error.message || "Failed get positionRoleDepartment" });
            });
    }, [showFakerDialog,showDeleteAllDialog]);


    const onEditRow = (rowData, rowIndex) => {
        setSelectedEntityIndex(rowIndex);
        setShowEditDialog(true);
    };

    const onCreateResult = (newEntity) => {
        setData([...data, newEntity]);
    };
    const onFakerCreateResults = (newEntities) => {
        setSelectedEntityIndex();
        setData([...data, ...newEntities]);
    };
    const onSeederResults = (newEntities) => {
        setSelectedEntityIndex();
        setData([...data, ...newEntities]);
    };

    const onEditResult = (newEntity) => {
        let _newData = _.cloneDeep(data);
        _newData[selectedEntityIndex] = newEntity;
        setData(_newData);
    };

    const deleteRow = async () => {
        try {
            await client.service("positionRoleDepartment").remove(data[selectedEntityIndex]?._id);
            let _newData = data.filter((_, i) => i !== selectedEntityIndex);
            setData(_newData);
            setSelectedEntityIndex();
            setShowAreYouSureDialog(false)
        } catch (error) {
            console.log({ error });
            props.alert({ title: "PositionRoleDepartment", type: "error", message: error.message || "Failed delete record" });
        }
    };
    const onRowDelete = (index) => {
        setSelectedEntityIndex(index);
        setShowAreYouSureDialog(true);
    };

    const onShowDeleteAll = (rowData, rowIndex) => {
        setShowDeleteAllDialog(true);
    };

    const deleteAll = async () => {
        setShowDeleteAllDialog(false);
        const countDataItems = data?.length;
        const promises = data.map((e) => client.service("positionRoleDepartment").remove(e._id));
        await Promise.all(
          promises.map((p) =>
            p.catch((error) => {
              props.alert({
                title: "PositionRoleDepartment",
                type: "error",
                message: error.message || "Failed to delete all records",
              });
              console.log({ error });
            })
          )
        );
        await props.alert({
          title: "PositionRoleDepartment",
          type: "warn",
          message: `Successfully dropped ${countDataItems} records`,
        });
      };

    const onRowClick = ({data}) => {
        props.setOnePositionRoleDepartment(data._id);
        navigate(`/positionRoleDepartment/${data._id}`)
    };

    const menuItems = [
        {
            label: "Faker",
            icon: "pi pi-sliders-h",
            command: (e) => {
                setShowFakerDialog(true);
            },
        },
        {
            label: "Seeder",
            icon: "pi pi-forward",
            command: (e) => {
                setShowSeederDialog(true);
            },
        },
        {
            label: `Drop ${data?.length}`,
            icon: "pi pi-trash",
            command: (e) => {
                setShowDeleteAllDialog(true);
            },
        },
    ];


    return (
        <div className="mt-5"  style={{minHeight : 'calc(90vh - 9rem)'}}>
            <div className="grid">
                <div className="col-6 flex justify-content-start">
                    <h3 className="mb-0 ml-2">Position Role Department </h3>
                </div>
                <div className="col-6 flex justify-content-end">
                    <Button label="add" icon="pi pi-plus" onClick={() => setShowCreateDialog(true)} role="positionRoleDepartment-add-button"/>
                    <SplitButton model={menuItems.filter((m) => !(m.icon==="pi pi-trash" && data?.length===0))} dropdownIcon="pi pi-ellipsis-v" buttonClassName="hidden" menuButtonClassName="ml-1 p-button-text"></SplitButton>
                </div>
            </div>
            <div className="grid align-items-center">
                <div className="col-12" role="positionRoleDepartment-datatable">
                    <PositionRoleDepartmentDatatable items={data} onRowDelete={onRowDelete} onEditRow={onEditRow} onRowClick={onRowClick} />
                 </div>
            </div>
            <AreYouSureDialog header="Delete" body="Are you sure you want to delete this record?" show={showAreYouSureDialog} onHide={() => setShowAreYouSureDialog(false)} onYes={() => deleteRow()} />
            <PositionRoleDepartmentEditDialogComponent entity={data[selectedEntityIndex]} show={showEditDialog} onHide={() => setShowEditDialog(false)} onEditResult={onEditResult} />
            <PositionRoleDepartmentCreateDialogComponent show={showCreateDialog} onHide={() => setShowCreateDialog(false)} onCreateResult={onCreateResult} />
            <PositionRoleDepartmentFakerDialogComponent show={showFakerDialog} onHide={() => setShowFakerDialog(false)} onFakerCreateResults={onFakerCreateResults} />
            <PositionRoleDepartmentSeederDialogComponent show={showSeederDialog} onHide={() => setShowSeederDialog(false)} onSeederResults={onSeederResults} />
            <AreYouSureDialog header={`Drop ${data?.length} records`} body={`Are you sure you want to drop ${data?.length} records?`} show={showDeleteAllDialog} onHide={() => setShowDeleteAllDialog(false)} onYes={() => deleteAll()} />
        </div>
    );
};
const mapState = (state) => ({
    //
});
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    setOnePositionRoleDepartment: (id) => dispatch.positionRoleDepartment.setOnePositionRoleDepartment(id)
});

export default connect(mapState, mapDispatch)(PositionRoleDepartmentPage);
