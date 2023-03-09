export default function removeUnnecessaryLinks(input: string): string {
    const emailRegex = /\b[\w\.-]+@[\w\.-]+\.\w{2,}\b/g; // Matches email addresses
    const linkRegex = /(?:https?|ftp):\/\/[\n\S]+/g; // Matches links
  
    // Replace email addresses and links with empty strings
    const output = input.replace(emailRegex, '').replace(linkRegex, '');
  
    return output;
  }
  