package com.example.productsAPI.SignUp;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
class NewUser {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String firstName;
	private String lastName;
	private Long mobileNumber;
	private String address;
	private String role;
	private String email;
	private String password;
	private String confirmPassword;
	private LocalDateTime createdDate = LocalDateTime.now();
	private boolean isActive = true;

	// Constructors, getters, and setters
	public NewUser() {
		this.createdDate = LocalDateTime.now();
        this.isActive = true;
	}

	public NewUser(String firstName, String lastName, Long mobileNumber, String address, String role, String email, String password,String confirmPassword) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobileNumber = mobileNumber;
        this.address = address;
        this.role = role;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Long getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(Long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

	public LocalDateTime getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(LocalDateTime createdDate) {
		this.createdDate = createdDate;
	}

	public boolean isActive() {
		return isActive;
	}

	public void setActive(boolean active) {
		isActive = active;
	}
}

interface UserRepository extends JpaRepository<NewUser, Long> {
}

@Service
class UserService {
	@Autowired
	private UserRepository userRepository;

	public NewUser saveUser(NewUser user) {
		return userRepository.save(user);
	}

	public List<NewUser> getAllUsers() {
		return userRepository.findAll();
	}

	public NewUser getUserById(Long id) {
		return userRepository.findById(id).get();

	}
}

@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UserControllerSignUp {

	@Autowired
	private UserService userService;

	@GetMapping("/")
	public List<NewUser> getAllUsers() {
		return userService.getAllUsers();
	}

	@GetMapping("/{id}")
	public ResponseEntity<NewUser> getUserById(@PathVariable Long id) {
		NewUser user = userService.getUserById(id);
		return ResponseEntity.ok().body(user);
	}

	@PostMapping("/signup")
	public ResponseEntity<NewUser> signUp(@RequestBody NewUser user) {
		// Additional validation can be added here
		// For example, validate password matching

		if (!user.getPassword().equals(user.getConfirmPassword())) {
			return ResponseEntity.badRequest().build();
		}

		NewUser savedUser = userService.saveUser(user);
		return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
	}

	// Other controller methods...
}

class ErrorResponse {
	private int status;
	private String message;

	// Constructors, getters, setters
	public ErrorResponse(int status, String message) {
		this.status = status;
		this.message = message;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
