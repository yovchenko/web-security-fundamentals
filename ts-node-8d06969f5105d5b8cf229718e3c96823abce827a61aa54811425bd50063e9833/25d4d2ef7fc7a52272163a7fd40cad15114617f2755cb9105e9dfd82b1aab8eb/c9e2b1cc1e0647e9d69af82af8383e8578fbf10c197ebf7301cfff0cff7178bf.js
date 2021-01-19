"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("./database");
function readAllLessons(req, res) {
    return res.status(200).json(database_1.db.readAllLessons());
}
exports.readAllLessons = readAllLessons;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUveW92Y2hlbmtvL1Byb2plY3RzL2FuZ3VsYXItc2VjdXJpdHktY291cnNlL3NlcnZlci9yZWFkLWFsbC1sZXNzb25zLnJvdXRlLnRzIiwic291cmNlcyI6WyIvaG9tZS95b3ZjaGVua28vUHJvamVjdHMvYW5ndWxhci1zZWN1cml0eS1jb3Vyc2Uvc2VydmVyL3JlYWQtYWxsLWxlc3NvbnMucm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSx1Q0FBOEI7QUFJOUIsU0FBZ0IsY0FBYyxDQUFDLEdBQUcsRUFBRSxHQUFHO0lBR25DLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7QUFDckQsQ0FBQztBQUpELHdDQUlDIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCB7ZGJ9IGZyb20gXCIuL2RhdGFiYXNlXCI7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZEFsbExlc3NvbnMocmVxLCByZXMpIHtcblxuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRiLnJlYWRBbGxMZXNzb25zKCkpO1xufSJdfQ==