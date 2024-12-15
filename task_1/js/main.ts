
// Define the Teacher interface
interface Teacher {
    readonly firstName: string; // Immutable after initialization
    readonly lastName: string;  // Immutable after initialization
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; // Optional attribute
    location: string;
    [key: string]: any; // Index signature for additional properties
  }
  
  // Example usage
  const teacher3: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: false,
    location: "London",
    contract: false, 
  };
  
  console.log(teacher3);
  
  
  