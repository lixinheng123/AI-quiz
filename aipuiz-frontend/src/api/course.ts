// ===================== 管理员接口 =====================

import axios from "axios";

// 添加课程
export function addCourse(data: { name: string; description: string; teacherId: string }) {
  return axios.post('/api/admincourse/addCourse', data);
}

// 获取所有课程列表
export function getCourseList() {
  return axios.post('/api/admincourse/getCourseList', {});
}

// 获取课程详情（根据ID）
export function getCourseById(id: string | number) {
  return axios.post(`/api/admincourse/getCourseById/${id}`, null);
}

// 修改课程
export function updateCourse(id: string, data: { name: string; description: string; teacherId: string }) {
  return axios.post(`/api/admincourse/updateCourse/${id}`, data);
}

// 删除课程（支持批量）
export function deleteCourse(ids: number[]) {
  return axios.get(`/api/admincourse/deleteCourse`, {
    params: { ids: ids.join(',') }
  });
}

// 获取学生加入课程的请求列表（管理员/教师）
export function getJoinCourseRequestList(courseId: string | number) {
  return axios.get(`/api/admincourse/joinCourserequest/${courseId}`);
}

// 管理员接受/拒绝学生加入课程的请求
export function acceptJoinRequest(requestId: string | number, status: 'ACCEPTED' | 'REJECTED') {
  return axios.get(`/api/admincourse/acceptJoinRequest/${requestId}?status=${status}`);
}

// ===================== 学生接口 =====================

// 获取学生加入的课程列表
export function getStudentCourseList(studentId: string | number) {
  return axios.get(`/api/studentcourse/getCourseList/${studentId}`);
}

// 学生申请加入课程
export function joinCourse(courseId: string | number) {
  return axios.get(`/api/studentcourse/joinCourse/${courseId}`);
}

// ===================== 教师接口 =====================

// 查询所有教师
export function getAllTeachers() {
  return axios.get('/api/user/getAllteacher');
}

