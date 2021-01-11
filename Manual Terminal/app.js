var command = "";
var tab = "&nbsp;&nbsp;&nbsp;&nbsp;";
var space = "&nbsp;";
var help_commands = {
  "clear/cls": "Clears the terminal",
  "ls/dir": "Lists all files in directory",
  help: "Help command",
};
var help_spacing = 8;
var commands = {
  ls: `about.txt${tab}links.txt`,
};

var output_text = {
  unknown_command:
    '<span class="error">Unknown command COMMAND_NAME.<br>Run help for a list of commands.</span>',
  unknown_arguments:
    '<span class="error">Unknown arguments COMMAND_ARGUMENTS.<br>Run help for information on commands.</span>',
};

var output_element = document.getElementById("output");
var command_element = document.getElementById("command");
// TODO: Port this to mobile
// TODO: Fix bug with a ton of characters overflowing screen
document.addEventListener("keydown", function (event) {
  reset_elements();
  switch (event.key) {
    case "Enter":
      output_element.innerHTML = "";
      run_command();
      command = "";
      break;
    case "Backspace":
      command = command.slice(0, -1);
      break;
  }
  reset_elements();
  if (event.key.length > 1) {
    // TODO: This is a terrble way to do it, try and find a better way to do it.
    command_element.innerHTML = command;
    return;
  }
  command += event.key;
  command_element.innerHTML = command;
});

function run_command() {
  reset_elements();
  var split_command = command.split(" ");
  split_command = split_command.filter((str) => /\S/.test(str));
  switch (split_command[0]) {
    case "dir":
    case "ls":
      if (split_command.length > 1)
        output_element.innerHTML = output_text.unknown_arguments.replace(
          "COMMAND_ARGUMENTS",
          `"${split_command.slice(1).join(" ")}"`
        );
      else output_element.innerHTML = commands.ls;
      new_line();
      break;
    case "clear":
    case "cls":
      clear();
      break;
    case "help":
      output_element.innerHTML = help();
      new_line();
      break;
    default:
      output_element.innerHTML = output_text.unknown_command.replace(
        "COMMAND_NAME",
        `"${split_command[0]}"`
      ); // TODO: Do this a better way
      new_line();
  }
}
function help() {
  var help = Object.keys(help_commands);
  help.sort();
  var max = Math.max(...help.map((el) => el.length));
  var output = help.map((item) => {
    return `${item}${space.repeat(max - item.length + help_spacing)}${
      help_commands[item]
    }`;
  });
  return output.join("<br>");
}
function clear() {
  var elements = document.getElementById("terminal").querySelectorAll("div");
  var new_html = get_new_html();
  for (let i = 0; i < elements.length; i++) elements[i].remove();
  var div = document.createElement("div");
  div.className = "input-line";
  div.id = "current";
  div.innerHTML = new_html;
  document.getElementById("terminal").appendChild(div);
}

function new_line() {
  reset_elements();
  var current = document.getElementById("current");
  var user = document.getElementById("user");
  var command_line = document.getElementById("command");
  var blink = document.getElementById("floating-box");
  var output = document.getElementById("output");
  var new_html = get_new_html();
  current.removeAttribute("id");
  user.removeAttribute("id");
  command_line.removeAttribute("id");
  blink.remove();
  output.removeAttribute("id");
  var div = document.createElement("div");
  div.className = "input-line";
  div.id = "current";
  div.innerHTML = new_html;
  document.getElementById("terminal").appendChild(div);
}

function reset_elements() {
  output_element = document.getElementById("output");
  command_element = document.getElementById("command");
}

function get_new_html() {
  reset_elements();
  var current = document.getElementById("current");
  var user = document.getElementById("user");
  var command_line = document.getElementById("command");
  var blink = document.getElementById("floating-box");
  var output = document.getElementById("output");
  var new_html = `
  ${user.outerHTML}
  <${command_line.tagName.toLowerCase()} id="${command_line.id}" class="${
    command_line.className
  }"></${command_line.tagName.toLowerCase()}>
  ${blink.outerHTML}
  <${output.tagName.toLowerCase()} 
    id="${output.id}" 
    class="${output.className}">
  </${output.tagName.toLowerCase()}>
  `;
  return new_html;
}
