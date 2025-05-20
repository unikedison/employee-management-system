using Microsoft.AspNetCore.Mvc;
using EmployeeManagementAPI.Models;

namespace EmployeeManagementAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : ControllerBase
    {
        private static List<Employee> _employees = new List<Employee>
        {
            new Employee { Id = 1, Name = "Rohit", Position = "Developer", Salary = 60000 },
            new Employee { Id = 2, Name = "Ankit", Position = "Designer", Salary = 55000 },
            new Employee { Id = 3, Name = "Sankalp", Position = "Manager", Salary = 70000 },
            new Employee { Id = 4, Name = "Khushboo", Position = "Developer", Salary = 60000 },
            new Employee { Id = 5, Name = "Diksha", Position = "Manager", Salary = 70000 }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Employee>> GetAll()
        {
            return Ok(_employees);
        }

        [HttpGet("{id}")]
        public ActionResult<Employee> GetById(int id)
        {
            var employee = _employees.FirstOrDefault(e => e.Id == id);
            if (employee == null)
                return NotFound();
            return Ok(employee);
        }

        [HttpPost]
        public ActionResult<Employee> Create(Employee employee)
        {
            employee.Id = _employees.Max(e => e.Id) + 1;
            _employees.Add(employee);
            return CreatedAtAction(nameof(GetById), new { id = employee.Id }, employee);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Employee updatedEmployee)
        {
            var existing = _employees.FirstOrDefault(e => e.Id == id);
            if (existing == null)
                return NotFound();

            existing.Name = updatedEmployee.Name;
            existing.Position = updatedEmployee.Position;
            existing.Salary = updatedEmployee.Salary;
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var employee = _employees.FirstOrDefault(e => e.Id == id);
            if (employee == null)
                return NotFound();

            _employees.Remove(employee);
            return NoContent();
        }
    }
}
