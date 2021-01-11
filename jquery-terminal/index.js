var help_commands = {
  clear: {
    about: "Clears the terminal",
    max_params: 0,
    min_params: 0,
    description: "Clears the terminal. Usuage: clear",
  },
  ls: {
    about: "Lists all files in directory",
    max_params: 0,
    min_params: 0,
    description: "Lists all the files in the current directory. Usuage: ls",
  },
  help: {
    about: "Help command",
    max_params: 1,
    min_params: 0,
    description: "The help command. Usuage: help {command}",
  },
  cat: {
    about: "Prints contents in file.",
    max_params: 1,
    min_params: 0,
    description: "Prints the contents of a desired file. Ususage: cat {file name}",
  },
  sudo: {
    about: "Prints contents in file.",
    max_params: 1,
    min_params: 0,
    description: "Prints the contents of a desired file. Ususage: cat {file name}",
  }
};
var files = ["about.txt", "index.html", "readme.txt"].sort();
var help_spacing = 8;
$("body").terminal(
  async function (command) {
    var delay = ms => new Promise(res => setTimeout(res, ms));
    var say = async (text, delay_s, error = false) => {
      for (let i = 0; i < text.length; i++) {
        console.log(text[i])
        if (!error) this.echo(text[i], { newline: false })
        else this.error(text[i], { newline: false })
        await delay(delay_s, delay * 1000)
      }
      this.error('');
    };
    var input = command.split(" ");
    if (help_commands[input[0]] == undefined) {
      this.error(
        'Unknown command "' + input[0] + '". Run help for a list of commands.'
      );
      return;
    }
    if (input.length - 1 < help_commands[input[0]].min_params) {
      this.error(
        `Expected ${help_commands[input[0]].min_params} paramater${
          help_commands[input[0]].min_params > 1 ||
          help_commands[input[0]].min_params == 0
            ? "s"
            : ""
        } for command ${input[0]}, but got ${input.length - 1}.`
      );
      return;
    }
    if (input.length - 1 > help_commands[input[0]].max_params) {
      this.error(
        `Expected ${help_commands[input[0]].max_params} paramater${
          help_commands[input[0]].max_params > 1 ||
          help_commands[input[0]].max_params == 0
            ? "s"
            : ""
        } for command ${input[0]}, but got ${input.length - 1}.`
      );
      return;
    }
    switch (input[0]) {
      case "help":
        this.set_command('testing')
        if (input.length - 1 == 0) {
          var help = Object.keys(help_commands);
          help.sort();
          var max = Math.max(...help.map((el) => el.length));
          var output = help.map((item) => {
            return `${item}${" ".repeat(max - item.length + help_spacing)}${
              help_commands[item].about
            }`;
          });
          this.echo(output.join("\n"));
        } else {
          if (help_commands[input[0]] == undefined) {
            this.error(
              'Unknown command "' +
                input[0] +
                '". Run help for a list of commands.'
            );
            return;
          }
          this.echo(help_commands[input[0]].description);
        }
        break;
      case "ls":
        this.echo(files.join("    "));
        break;
      case "clear":
        this.clear();
        break;
      case "sudo":
        // this.error("Access denied... Asking for login.");
        await say("Access denied... Asking for login.", 2, false);
        // this.disable();
        // this.error("It seems like you're trying to access my computer.");
        // this.error("I'm sorry but I'm going to have to stop you.");
        // this.insert("exit");
        // setTimeout(() => {this.disable(); location.replace('about:blank').close();}, 1000);
        break;
    }
  },
  {
    prompt: "[[g;#8ae234;]Nano-AI@Website]:[[g;#729fcf;]~]$ ",
    greetings: false,
  }
);
// http://127.0.0.1:5500/index.html