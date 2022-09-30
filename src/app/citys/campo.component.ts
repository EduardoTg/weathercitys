import { Component, OnInit } from '@angular/core';
import { RuleService } from '../services/campos.service';
import * as _ from 'lodash'
import swal from 'sweetalert2'
@Component({
  selector: 'app-campo',
  templateUrl: './campo.component.html',
  styleUrls: ['./style.css']
})
export class campoComponent implements OnInit {

  rules: any = []
  form: any = {};
  fieldsList: any = []
  validador: any = {}

  constructor(private rulesService: RuleService) {
  }
  // this.fieldsList[index].required = event.target.checked;

  ngOnInit() {
    this.getData()
  }

  async getData() {
    this.form = {}
    this.rules = await this.rulesService.showRules()
    console.log(this.rules);
  }

  addField() {
    this.fieldsList.push({
      name: '',
      required: false,
      rules: []
    })
  }

  addRule(index: number) {
    this.fieldsList[index].rules.push({
      name: '',
      arguments: []
    })
  }

  addRuleType(index: number, indexRule: number, value: string) {


    let validationRules = this.fieldsList[index].rules.filter(rule => rule.name == value)
    console.log(validationRules.length);
    if (validationRules.length > 1) {
      this.fieldsList[index].rules.pop();
      swal.fire({
        title: '',
        text: "Element duplicated",
        type: 'warning',
      })
    }
    else {
      let rule = this.rules.filter(rule => rule.name == value)
      this.fieldsList[index].rules[indexRule] = rule[0]
      this.fieldsList[index].rules[indexRule].valuesArguments = {}
    }

    // this.fieldsList[index].rules[indexRule].name  = rule[0].name
  }

  addValueArgument(argument: string, value: string, index: number, indexRule: number) {
    this.fieldsList[index].rules[indexRule].valuesArguments[argument] = value
  }

  deleteRule(index: number) {
    swal.fire({
      title: '',
      text: "Are you sure delete rule?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.value)
        this.fieldsList.splice(index, 1);
    })
  }

  deleteArgument(index: number, indexRule: number) {
    swal.fire({
      title: '',
      text: "Are you sure delete argument?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.value)
        this.fieldsList[index].rules.splice(indexRule, 1);
    })
  }

  save() {
    console.log(this.fieldsList);
  }

}

